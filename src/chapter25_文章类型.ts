// 从第 25 章提取
// 代码清单: 文章类型
// 文件名: chapter25_文章类型.ts
// 文章类型
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '文章标题',
  datePublished: '2024-01-01',
  dateModified: '2024-01-02',
  author: { '@type': 'Person', name: '作者名' },
};

// 产品类型
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: '产品名称',
  description: '产品描述',
  image: '产品图片URL',
  offers: {
    '@type': 'Offer',
    price: '99.00',
    priceCurrency: 'CNY',
    availability: 'https://schema.org/InStock',
  },
};

// 本地商家类型
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '店铺名称',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '某某路 123 号',
    addressLocality: '北京市',
    addressRegion: '朝阳区',
    postalCode: '100000',
  },
  telephone: '+86-10-12345678',
  openingHours: 'Mo-Fr 09:00-18:00',
};
