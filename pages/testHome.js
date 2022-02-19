import Head from 'next/head'
import styles from '../styles/TestHome.module.css'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Divider from '../components/Divider';


export default function TestHome({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  const [mappedCategories, setMappedCategories] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'zhxqf9jz',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
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
        <h3 className={styles.titleOne}>Últimos artículos</h3>
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.postContainer}>
              <div className={styles.post}>
                {/* {publishedAt.replace('T',' ').replace('Z', '').substring(0, publishedAt.length-8)} */}
                <h3 className={styles.title}>{p.title}</h3>
                <img className={styles.mainImage} src={p.mainImage} />
                <div className={styles.categoriesContainer}>
                  {p.categories.map((c)=>{ return <p>{c.title}</p>; })}
                </div>
              </div>
              {mappedPosts.length-1 > index && (index%2!=0 || index == 0) ? <div className={styles.verticalDivider}></div> : <></> }
              {mappedPosts.length-1 > index && <div className={styles.hr}><Divider/></div>}
            </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "post" ][0...6]{...,categories[]->{title}}`);
  const url = `https://zhxqf9jz.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  console.log(result.result[0].categories);
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
