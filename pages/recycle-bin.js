import React from 'react'
import { MainSection, PageContainer, Subtitle } from '@/styles/globalStyles'
import { RecycleBinIcon } from '@/components/CustomIcons/styles'

const RecycleBin = () => {
  return (
    <MainSection className="MainSection">
      <Subtitle>Recycle Bin</Subtitle>
      <PageContainer className="PageContainer">
        <RecycleBinIcon>
          <span className="trash">
            <span></span>
            <i></i>
          </span>
        </RecycleBinIcon>
      </PageContainer>
    </MainSection>
  )
}

export default RecycleBin
