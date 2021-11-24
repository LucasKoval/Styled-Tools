import React from 'react'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import { SportCard } from '@/components/Cards/styles'

export default function Page1() {
  return (
    <MainSection className="MainSection">
      <Subtitle>Sports Shopping Card</Subtitle>
      <PageContainer className="cards">
        <SportCard>
          <div class="container">
            <div class="card">
              <div class="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div class="contentBx">
                <h2>Nike Shoes</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div class="color">
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
          <div class="container container-blue">
            <div class="card card-blue">
              <div class="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div class="contentBx contentBx-blue">
                <h2>Nike Shoes</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div class="color color-blue">
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
          <div class="container container-coral">
            <div class="card card-coral">
              <div class="imgBx">
                <img src="https://assets.codepen.io/4164355/shoes.png" />
              </div>
              <div class="contentBx contentBx-coral">
                <h2>Nike Shoes</h2>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div class="color color-coral">
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
