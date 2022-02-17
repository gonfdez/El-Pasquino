import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'zhxqf9jz',
      dataset: 'test',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}

        <div className={styles.body}>
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  console.log(pageSlug);

  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://zhxqf9jz.api.sanity.io/v1/data/query/test?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  console.log(result);
  const post = result.result[0];
  console.log(post);

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      }
    }
  }
};


export default Post;