import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Product, Product as ProductType } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { Blocks } from '../../../_components/Blocks'
import { PaywallBlocks } from '../../../_components/PaywallBlocks'
import { ProductHero } from '../../../_heros/Product'
import { generateMeta } from '../../../_utilities/generateMeta'
import { Gutter } from '../../../_components/Gutter'

import classes from './index.module.scss'
import { Button } from '../../../_components/Button'
import FeedbackForm from '../../../_components/Feedbacks'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

export default async function Product({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let product: Product | null = null

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!product) {
    notFound()
  }

  const { relatedProducts } = product

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>)
    }
    return stars
  }

  return (
    <>
      <ProductHero product={product} />
      {product?.enablePaywall && <PaywallBlocks productSlug={slug as string} disableTopPadding />}
      <Gutter>
        <div className={classes.feedbackWrapper}>
          <div className={classes.heading}>
            <h2>Feedbacks/Reviews</h2>
            <FeedbackForm />
          </div>
          <div className={classes.gridWrapper}>
            {product?.feedbacks &&
              product?.feedbacks.map(feedback => (
                <div key={feedback.id} className={classes.gridCard}>
                  <h3>{feedback.name}</h3>
                  <span>{renderStars(feedback.rating)}</span>
                  <span>{feedback.feedback}</span>
                </div>
              ))}
            {product?.feedbacks.length === 0 && (
              <div className={classes.gridCard}>
                <span>No feedbacks yet</span>
              </div>
            )}
          </div>
        </div>
      </Gutter>
      {relatedProducts?.length > 0 && (
        <Blocks
          disableTopPadding
          blocks={[
            {
              blockType: 'relatedProducts',
              blockName: 'Related Product',
              relationTo: 'products',
              introContent: [
                {
                  type: 'h3',
                  children: [
                    {
                      text: 'Related Products',
                    },
                  ],
                },
              ],
              docs: relatedProducts,
            },
          ]}
        />
      )}
    </>
  )
}

export async function generateStaticParams() {
  try {
    const products = await fetchDocs<ProductType>('products')
    return products?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let product: Product | null = null

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: product })
}
