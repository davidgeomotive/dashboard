import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import styles from 'assets/jss/material-dashboard-react/views/sitesStyle.js';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Material Design Team</h4>
            <p className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{' '}
              <a href='https://design.google.com/icons/?ref=creativetime' target='_blank' rel='noopener noreferrer'>
                Google
              </a>
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={['sm', 'xs']}>
              <iframe
                className={classes.iframe}
                src='https://www.villeroy-boch.co.uk/shop/home'
                title='Team iframe'
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={['lg', 'md']}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The sites are visible on Desktop mode inside an iframe. Since the iframe is not
                  working on Mobile and Tablets please visit the site on their original. Check the{' '}
                  <a href='https://www.villeroy-boch.co.uk/shop/home' target='_blank' rel='noopener noreferrer'>
                    Villeroy & Boch
                  </a>
                </h5>
              </GridItem>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
