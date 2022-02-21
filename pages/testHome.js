import Head from 'next/head'
import styles from '../styles/TestHome.module.css'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Divider from '../components/Divider';


export default function TestHome({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'zhxqf9jz',
        dataset: 'production',
      });
    
      setMappedPosts(
        posts.map((p, index) => {
          return {
            ...p,
            mainImage: index==0 ? imgBuilder.image(p.mainImage).width(1000).height(700): null,
          }
        })
      );
     } else {
      setMappedPosts([]);
     }
  }, [posts]);


  return (
    <div>
      <div className={styles.main}>
        {/* <h3 className={styles.titleOne}>Últimos artículos</h3> */}
        <div className={styles.feed}>
          
          {!mappedPosts.length ? <>No hay artículos</> :  mappedPosts.map((p, index) => (
            (index!=0 ? //Post que no son el primero
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.postContainer}>
              <div className={styles.post}>
                <p className={styles.publishedAt}>{p.publishedAt.replace('T',' ').replace('Z', '').substring(0, p.publishedAt.length-8)}</p>
                <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.description}>{p.subtitle}</p>
                <div className={styles.categoriesContainer}>
                  {p.categories.map((c)=>{ return <p>{c.title}</p>; })}
                </div>
              </div>
              {mappedPosts.length-1 > index && (index%2!=0 || index == 0) ? <div className={styles.verticalDivider}></div> : <></> }
              {mappedPosts.length-1 > index && <div className={styles.hr}><Divider/></div>}
            </div>
           : // Codigo del primer post (El ultimo publicado)
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.postContainerM}>
              <div className={"postM "+styles.postM} >
                <div className={styles.w100}><p className={styles.publishedAtM}>{p.publishedAt.replace('T',' ').replace('Z', '').substring(0, p.publishedAt.length-8)}</p></div>
                <div className={styles.w100}><h3 className={styles.titleM}>{p.title}</h3></div>
                  <img className={styles.mainImage} src={p.mainImage} />
                  <div className={styles.w100}><p className={styles.description}>{p.subtitle}</p></div>
                  <div className={styles.w100}>
                    <div className={styles.categoriesContainerM}>
                      {p.categories.map((c)=>{ return <p>{c.title}</p>; })}
                    </div>
                </div>
              </div>
              <style jsx>{` 
              
              .postM {
                background-color: white;
                background-image: url("");
                }
              @media only screen and (min-width: 992px) {
                .postM {
                  background-image: url("${p.mainImage}");
                }
              } 
              `}</style>
              {/* Vertical divider modo ordenador */}
              {mappedPosts.length-1 > index && (index%2!=0 || index == 0) ? <div className={styles.verticalDivider}></div> : <></> }
              {/* Horizontal Divider Modo Movil */}
              {mappedPosts.length-1 > index && <div className={styles.hr}><Divider/></div>}
            </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "post" ][0...7]{...,categories[]->{title}}`);
  const url = `https://zhxqf9jz.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  // console.log(result.result[0].categories);
  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};
