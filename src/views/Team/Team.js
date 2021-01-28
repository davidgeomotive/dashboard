/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle';
import ChartistGraph from 'react-chartist';
import AccessTime from '@material-ui/icons/AccessTime';
import { totalConversionChart, viewedChart } from 'variables/charts.js';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Team() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <GridContainer>
      <GridItem
        xs={12}
        sm={12}
        lg={6}
        onClick={() => history.push('/admin/team/villeroy-boch.co.uk')}
      >
        <Card site>
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Villeroy & Boch</h4>
            <p className={classes.cardCategoryWhite}>villeroy-boch.co.uk</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
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
                    <h4 className={classes.cardTitle}>Total Conversions</h4>
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
                  <CardHeader color='warning'>
                    <ChartistGraph
                      className='ct-chart'
                      data={viewedChart.total}
                      type='Line'
                      options={viewedChart.options}
                      listener={viewedChart.animation}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Total Visits</h4>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> updated 4 minutes ago
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} lg={6} onClick={() => history.push('/admin/team/villeroy-boch.de')}>
        <Card site>
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Villeroy & Boch</h4>
            <p className={classes.cardCategoryWhite}>villeroy-boch.de</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
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
                    <h4 className={classes.cardTitle}>Total Conversions</h4>
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
                  <CardHeader color='warning'>
                    <ChartistGraph
                      className='ct-chart'
                      data={viewedChart.total}
                      type='Line'
                      options={viewedChart.options}
                      listener={viewedChart.animation}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Total Visits</h4>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> updated 4 minutes ago
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
