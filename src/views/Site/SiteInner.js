import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import ChartistGraph from 'react-chartist';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import AccessTime from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle';

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
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color='rose'>
            <ChartistGraph
              className='ct-chart'
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
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color='warning'>
            <ChartistGraph
              className='ct-chart'
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
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color='info'>
            <ChartistGraph
              className='ct-chart'
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
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
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
              Conversions Baseline <span className={classes.cardDanger} />
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
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
                Conversions Baseline % <span className={classes.cardDanger} />
              </p>
              <p className={classes.cardCategory}>
                Conversions Personalized % <span className={classes.cardWarning} />
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
      <GridItem xs={12} sm={12} md={12}>
        <Card chart>
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
            <h4 className={classes.cardTitle}>Conversion Lift to Baseline %</h4>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
