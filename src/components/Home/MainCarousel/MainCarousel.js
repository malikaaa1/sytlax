import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Grid } from '@mui/material';
import './MainCarousel.css' 
const MainCarousel = () => {
    return (
        <div>
            <Carousel className="carousel" variant="dark">

  <Carousel.Item>
  <Grid container  spacing={1} >
    <img
      className="d-block w-50"
      src="https://www.journalofnomads.com/wp-content/uploads/2021/10/Kyrgyzstan-People-Portrait-Alay-Mountains.jpg"
      alt="Third slide"
    />
    <img
      className="d-block w-50"
      src="https://globalsiasar.org/sites/default/files/styles/hd/public/photos/extra/8883741222_db87613204_b.jpg?itok=l9nVEia1"
      alt="Third slide"
    />
    </Grid>
  </Carousel.Item>
  <Carousel.Item>
    <Grid container spacing={1} >
    <img
      className="d-block w-50"
      src="https://img.gazeta.ru/files3/455/14336455/RIAN_3275899.HR-pic_32ratio_900x600-900x600-67790.jpg"
      alt="Second slide"
    />
   
    <img
      className="d-block w-50"
      src="https://cdn-st2.rtr-vesti.ru/vh/pictures/xw/212/877/7.jpg"
      alt="Second slide"
    />
   
    </Grid>
  </Carousel.Item>
  <Carousel.Item>
      <Grid container spacing={1}>
    <img
      className="d-block w-50"
      src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/24/thumbs_b_c_1517b45846b2b442f2e3f4f1a370ebc1.jpg?v=161928"
      alt="Third slide"
    />
    <img
      className="d-block w-50"
      src="https://stjude.scene7.com/is/image/stjude/covid-fever-virus?fit=crop,1&fmt=png-alpha&wid=500&hei=313"
      alt="Third slide"
    />
    </Grid>
  </Carousel.Item>
  <Carousel.Item>
      <Grid container spacing={1}>
      <img
      className="d-block w-50 "
      src="https://www.globaltechrecruitment.com/wp-content/uploads/2019/03/it-1-1.jpg"
      alt="First slide"
    />
      <img
      className="d-block w-50 "
      src="https://images.thequint.com/thequint%2F2021-10%2F142dfcde-99eb-4b01-99fe-25905954b50b%2FScreenshot_2021_10_29_at_12_53_48_AM.png?rect=0%2C0%2C727%2C382&w=1200&auto=format%2Ccompress&ogImage=true"
      alt="First slide"
    />
    </Grid>
  </Carousel.Item>
  <Carousel.Item>
      <Grid container  spacing={1}>
      <img
      className="d-block w-50 "
      src="https://24.kg/files/media/248/248139.jpg"
      alt="First slide"
    />  
      <img
      className="d-block w-50 "
      src="https://ml5lgdru6o80.i.optimole.com/2aY8g94-OYlySVsD/w:372/h:217/q:auto/https://www.sportstourismnews.com/wp-content/uploads/2022/01/beijing-2022-olympic-winter-games-logo.jpg"
      alt="First slide"
    />  
    </Grid>
  </Carousel.Item>
  <Carousel.Item>
      <Grid container spacing={1}>
      <img
      className="d-block w-50 "
      src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/12-11-2019-fires-Australia2.jpg/image1170x530cropped.jpg"      alt="First slide"
    />
      <img
      className="d-block w-50 "
      src="https://www.fao.org/fileadmin/user_upload/newsroom/photos/Fire.jpg"      alt="First slide"
    />
    </Grid>
    </Carousel.Item>
</Carousel>
        </div>
    );
};

export default MainCarousel;