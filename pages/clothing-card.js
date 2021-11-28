import React from 'react'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import { SportCard } from '@/components/Cards/styles'

const ClothingCard = () => {
  return (
    <MainSection className="MainSection">
      <Subtitle>Clothing Purchase Card</Subtitle>
      <PageContainer className="cards">
        <SportCard>
          <div className="container">
            <div className="card">
              <div className="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div className="contentBx">
                <h2>Nike Shoes</h2>
                <div className="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div className="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </SportCard>

        <SportCard>
          <div className="container container-blue">
            <div className="card card-blue">
              <div className="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div className="contentBx contentBx-blue">
                <h2>Nike Shoes</h2>
                <div className="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div className="color color-blue">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </SportCard>

        <SportCard>
          <div className="container container-coral">
            <div className="card card-coral">
              <div className="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div className="contentBx contentBx-coral">
                <h2>Nike Shoes</h2>
                <div className="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div className="color color-coral">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
        </SportCard>
      </PageContainer>
    </MainSection>
  )
}

export default ClothingCard
