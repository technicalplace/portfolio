import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';

const products = [
  {
    id: 1,
    title: 'Travel Journal',
    category: 'Web site',
    year: '2024',
    description: '旅の思い出を写真と文章で残せる、レスポンシブなWebサイト。',
    tags: ['React', 'CSS', 'Responsive'],
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85',
    url: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Task Flow',
    category: 'App',
    year: '2024',
    description: 'タスクを直感的に整理できる、シンプルなカンバンアプリ。',
    tags: ['JavaScript', 'UI design', 'LocalStorage'],
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    url: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Coffee Stand',
    category: 'Landing page',
    year: '2023',
    description: '小さなお店の世界観とメニューを伝えるランディングページ。',
    tags: ['HTML', 'CSS', 'Animation'],
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
    url: 'https://github.com/',
  },
  {
    id: 4,
    title: 'Photo Gallery',
    category: 'Web site',
    year: '2023',
    description: '作品を大きな画像で楽しめる、ギャラリー形式のポートフォリオ。',
    tags: ['React', 'Modal', 'Accessibility'],
    image:
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85',
    url: 'https://github.com/',
  },
];

const categories = ['All', ...new Set(products.map((product) => product.category))];

export const Products = () => {

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(
    () =>
      activeCategory === 'All'
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    setActiveSlide(0);
  }, [activeCategory]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % filteredProducts.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [filteredProducts.length]);

  const changeSlide = (step) => {
    setActiveSlide(
      (current) =>
        (current + step + filteredProducts.length) % filteredProducts.length,
    );
  };

  const featuredProduct = filteredProducts[activeSlide];

  return (
    <section id="products" className={styles.productsPage}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.kicker}>Selected works</p>
          <h2>制作物</h2>
        </div>
        <p className={styles.headingText}>
          使いやすさと、見た瞬間に伝わるデザインを意識して制作しています。
        </p>
      </div>

      <div className={styles.featured} aria-label="おすすめ作品">
        <img
          src={featuredProduct.image}
          alt={`${featuredProduct.title}のプレビュー`}
          className={styles.featuredImage}
        />
        <div className={styles.featuredOverlay}>
          <div>
            <span className={styles.eyebrow}>{featuredProduct.category}</span>
            <h3>{featuredProduct.title}</h3>
            <p>{featuredProduct.description}</p>
          </div>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => setSelectedProduct(featuredProduct)}
          >
            詳細を見る
          </button>
        </div>
        <div className={styles.slideControls}>
          <button type="button" onClick={() => changeSlide(-1)} aria-label="前の作品">
            ←
          </button>
          <div className={styles.dots}>
            {filteredProducts.map((product, index) => (
              <button
                type="button"
                key={product.id}
                className={index === activeSlide ? styles.activeDot : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`${index + 1}番目の作品を表示`}
                aria-current={index === activeSlide ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={() => changeSlide(1)} aria-label="次の作品">
            →
          </button>
        </div>
      </div>

      <div className={styles.filterRow} aria-label="作品を絞り込む">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? styles.activeFilter : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <button
              type="button"
              className={styles.cardImageButton}
              onClick={() => setSelectedProduct(product)}
              aria-label={`${product.title}の詳細を開く`}
            >
              <img src={product.image} alt="" />
              <span>View detail ↗</span>
            </button>
            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span>{product.category}</span>
                <span>{product.year}</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className={styles.tags}>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProduct && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedProduct(null)}
              aria-label="詳細を閉じる"
            >
              ×
            </button>
            <img src={selectedProduct.image} alt="" />
            <div className={styles.modalBody}>
              <span className={styles.eyebrow}>{selectedProduct.category}</span>
              <h3 id="product-modal-title">{selectedProduct.title}</h3>
              <p>{selectedProduct.description}</p>
              <div className={styles.tags}>
                {selectedProduct.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
