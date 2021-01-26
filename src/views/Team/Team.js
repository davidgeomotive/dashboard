/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';

import styles from 'assets/jss/material-dashboard-react/views/sitesStyle.js';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import ChartistGraph from 'react-chartist';
import CardBody from '../../components/Card/CardBody';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import CardFooter from '../../components/Card/CardFooter';
import AccessTime from '@material-ui/icons/AccessTime';
import { totalConversionChart } from 'variables/charts.js';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Team() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart site onClick={() => history.push('/admin/team/site')}>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={totalConversionChart.data}
              type='Line'
              options={totalConversionChart.options}
              listener={totalConversionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h3>villeroy-boch.co.uk</h3>
            <h4 className={classes.cardTitle}>Total Conversions</h4>
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{' '}
              increase in today conversions.
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={totalConversionChart.data}
              type='Line'
              options={totalConversionChart.options}
              listener={totalConversionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h3>villeroy-boch.de</h3>
            <h4 className={classes.cardTitle}>Total Conversions</h4>
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 10%
              </span>{' '}
              increase in today conversions.
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
