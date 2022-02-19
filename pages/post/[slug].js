import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/Layout'

export const Post = ({ title, body, image, authors, publishedAt }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [mappedAuthors, setMappedAuthors] = useState([]);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'zhxqf9jz',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);
  
  useEffect(() => {
    if (authors.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'zhxqf9jz',
        dataset: 'production',
      });
      setMappedAuthors(
        authors.map(p => {
          return {
            ...p,
            image: imgBuilder.image(p.image).width(500).height(250),
          }
        })
      );
    } else {
      setMappedAuthors([]);
    }
  }, [authors]);



  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.publishedAt}>
          {publishedAt.replace('T',' ').replace('Z', '').substring(0, publishedAt.length-8)}
        </div>
        <h1 className={styles.title}>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}
        <div className={styles.body}>
          <BlockContent 
            blocks={body} 
            imageOptions={{w:350}}
            projectId="zhxqf9jz"
            dataset="production"
          />
        </div>
        <div className={styles.author}>
        <p className={styles.authorTitle}>Autor:</p>
        {mappedAuthors.length ? mappedAuthors.map((p) => (
              <p className={styles.authorName}>{p.name}</p>
          )) : <> Anónimo </>}
        </div>
        <p className={styles.publishedAt}>
          Fecha de publicación: {publishedAt.replace('T',' ').replace('Z', '').substring(0, publishedAt.length-8)}
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://zhxqf9jz.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());

  const post = result.result[0];
  

  if (!post) {
    return {
      notFound: true
    }
  } else {
    // Obetener informacion de las referencias
    if (!post.author) {
      var refResult = null;
    } else {
      var queryOne = encodeURIComponent(`*[ _type == "author" && _id == "${post.author['_ref']}" ]`);
      var urlOne = `https://zhxqf9jz.api.sanity.io/v2021-06-07/data/query/production?query=${queryOne}`;
      var refResult = await fetch(urlOne).then(res => res.json());
    }  
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        authors: (refResult ? refResult.result : [] ),
        publishedAt: post.publishedAt,
      }
    }
  }
};

export default Post;


