import React from 'react';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle';

import { makeStyles } from '@material-ui/core/styles';
import AccessTime from '@material-ui/icons/AccessTime';
import ChartistGraph from 'react-chartist';

const useStyles = makeStyles(styles);

export default function Site({
  conversionsData,
  viewedData,
  detectedData,
  sendData,
  detectedChart,
  sendChart,
  viewedChart,
  conversionsChart,
  conversionsPercentChart,
  conversionsPercentData,
  conversionsLiftChart,
  conversionsLiftData,
}) {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} lg={4} md={12}>
        <Card chart style={{minHeight: 318}}>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={conversionsData}
              type='Bar'
              options={conversionsChart.options}
              listener={conversionsChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Conversions</h4>
            <p className={classes.cardCategory}>
              Conversions Baseline <span className={`${classes.danger} ${classes.legend}`} />
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} lg={4} md={12}>
        <Card chart style={{minHeight: 318}}>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={conversionsPercentData}
              type='Bar'
              options={conversionsPercentChart.options}
              listener={conversionsPercentChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Conversions %</h4>
            <div className={classes.cardSubContainer}>
              <p className={classes.cardCategory}>
                Conversions Baseline % <span className={`${classes.danger} ${classes.legend}`} />
              </p>
              <p className={classes.cardCategory}>
                Conversions Personalized %{' '}
                <span className={`${classes.warning} ${classes.legend}`} />
              </p>
            </div>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} lg={4} md={12}>
        <Card chart style={{minHeight: 318}}>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={conversionsLiftData}
              type='Line'
              options={conversionsLiftChart.options}
              listener={conversionsLiftChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Conversions Lift to Baseline %</h4>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} lg={4} md={6}>
        <Card chart>
          <CardHeader color='white'>
            <ChartistGraph
              className='ct-chart danger white'
              data={detectedData}
              type='Line'
              options={detectedChart.options}
              listener={detectedChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Detected</h4>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} lg={4} md={6}>
        <Card chart>
          <CardHeader color='white'>
            <ChartistGraph
              className='ct-chart info white'
              data={sendData}
              type='Bar'
              options={sendChart.options}
              responsiveOptions={sendChart.responsiveOptions}
              listener={sendChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Send</h4>
            {/*<p className={classes.cardCategory}>*/}
            {/*  <span className={classes.successText}>Static Data Simulator Factor</span>{' '}*/}
            {/*  {sendData.simulatedData}*/}
            {/*</p>*/}
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} lg={4} md={6}>
        <Card chart>
          <CardHeader color='white'>
            <ChartistGraph
              className='ct-chart warning white'
              data={viewedData}
              type='Line'
              options={viewedChart.options}
              listener={viewedChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Viewed</h4>
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
