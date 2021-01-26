import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import GridItem from '../../components/Grid/GridItem';
import SiteInner from './SiteInner';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import {
  baselineChart,
  detectedChart,
  personalizedContentChart,
  sendChart,
  viewedChart,
  conversionsChart,
  conversionsPercentChart,
  conversionsLiftChart,
} from '../../variables/charts';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import ChartistGraph from 'react-chartist';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import AccessTime from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle';
import CardIcon from '../../components/Card/CardIcon';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Update from '@material-ui/icons/Update';
import SendIcon from '@material-ui/icons/Send';
import TocIcon from '@material-ui/icons/Toc';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(styles);

export default function Site() {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <VisibilityIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Page Views</p>
            <h3 className={classes.cardTitle}>6770</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color='warning' stats icon>
            <CardIcon color='warning'>
              <SendIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Content Send</p>
            <h3 className={classes.cardTitle}>2031</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color='success' stats icon>
            <CardIcon color='success'>
              <TocIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Baseline Content</p>
            <h3 className={classes.cardTitle}>634</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color='danger' stats icon>
            <CardIcon color='danger'>
              <PersonalVideoIcon />
            </CardIcon>
            <p className={classes.cardCategory}>Personalized Content</p>
            <h3 className={classes.cardTitle}>1012</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={3}>
        <Card chart>
          <CardHeader color='info'>
            <ChartistGraph
              className='ct-chart'
              data={viewedChart.total}
              type='Line'
              options={viewedChart.options}
              listener={viewedChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Total Page Views</h4>
            <p className={classes.cardCategory}>Weekly Views Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={3}>
        <Card chart>
          <CardHeader color='warning'>
            <ChartistGraph
              className='ct-chart'
              data={sendChart.total}
              type='Bar'
              options={sendChart.options}
              listener={sendChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Total Content Sent</h4>
            <p className={classes.cardCategory}>Weekly Send Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <Card chart>
          <CardHeader color='success'>
            <ChartistGraph
              className='ct-chart'
              data={baselineChart.total}
              type='Bar'
              options={baselineChart.options}
              responsiveOptions={baselineChart.responsiveOptions}
              listener={baselineChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Total Baseline Content</h4>
            <p className={classes.cardCategory}>Weekly Baseline Content Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={3}>
        <Card chart>
          <CardHeader color='danger'>
            <ChartistGraph
              className='ct-chart'
              data={personalizedContentChart.data}
              type='Line'
              options={personalizedContentChart.options}
              listener={personalizedContentChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Total Personalized Content</h4>
            <p className={classes.cardCategory}>Weekly Content Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 2 min ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomTabs
          title='User type:'
          headerColor='primary'
          tabs={[
            {
              tabName: 'First',
              tabIcon: DirectionsWalkIcon,
              tabContent: (
                <SiteInner
                  conversionsLiftChart={conversionsLiftChart}
                  conversionsLiftData={conversionsLiftChart.first}
                  conversionsPercentChart={conversionsPercentChart}
                  conversionsPercentData={conversionsPercentChart.first}
                  conversionsData={conversionsChart.first}
                  conversionsChart={conversionsChart}
                  viewedChart={viewedChart}
                  detectedChart={detectedChart}
                  sendChart={sendChart}
                  detectedData={detectedChart.first}
                  sendData={sendChart.first}
                  viewedData={viewedChart.first}
                />
              ),
            },
            {
              tabName: 'Buyer',
              tabIcon: ShoppingCartIcon,
              tabContent: (
                <SiteInner
                  conversionsLiftChart={conversionsLiftChart}
                  conversionsLiftData={conversionsLiftChart.buyer}
                  conversionsPercentChart={conversionsPercentChart}
                  conversionsPercentData={conversionsPercentChart.buyer}
                  conversionsData={conversionsChart.buyer}
                  conversionsChart={conversionsChart}
                  viewedChart={viewedChart}
                  detectedChart={detectedChart}
                  sendChart={sendChart}
                  detectedData={detectedChart.buyer}
                  sendData={sendChart.buyer}
                  viewedData={viewedChart.buyer}
                />
              ),
            },
            {
              tabName: 'Comparer',
              tabIcon: CompareArrowsIcon,
              tabContent: (
                <SiteInner
                  conversionsLiftChart={conversionsLiftChart}
                  conversionsLiftData={conversionsLiftChart.comparer}
                  conversionsPercentChart={conversionsPercentChart}
                  conversionsPercentData={conversionsPercentChart.comparer}
                  conversionsData={conversionsChart.comparer}
                  conversionsChart={conversionsChart}
                  viewedChart={viewedChart}
                  detectedChart={detectedChart}
                  sendChart={sendChart}
                  detectedData={detectedChart.comparer}
                  sendData={sendChart.comparer}
                  viewedData={viewedChart.comparer}
                />
              ),
            },
            {
              tabName: 'Researcher',
              tabIcon: FindReplaceIcon,
              tabContent: (
                <SiteInner
                  conversionsLiftChart={conversionsLiftChart}
                  conversionsLiftData={conversionsLiftChart.researcher}
                  conversionsPercentChart={conversionsPercentChart}
                  conversionsPercentData={conversionsPercentChart.researcher}
                  conversionsData={conversionsChart.researcher}
                  conversionsChart={conversionsChart}
                  viewedChart={viewedChart}
                  detectedChart={detectedChart}
                  sendChart={sendChart}
                  detectedData={detectedChart.researcher}
                  sendData={sendChart.researcher}
                  viewedData={viewedChart.researcher}
                />
              ),
            },
            {
              tabName: 'Inspirational',
              tabIcon: EmojiObjectsIcon,
              tabContent: (
                <SiteInner
                  conversionsLiftChart={conversionsLiftChart}
                  conversionsLiftData={conversionsLiftChart.inspirational}
                  conversionsPercentChart={conversionsPercentChart}
                  conversionsPercentData={conversionsPercentChart.inspirational}
                  conversionsData={conversionsChart.inspirational}
                  conversionsChart={conversionsChart}
                  viewedChart={viewedChart}
                  detectedChart={detectedChart}
                  sendChart={sendChart}
                  detectedData={detectedChart.inspirational}
                  sendData={sendChart.inspirational}
                  viewedData={viewedChart.inspirational}
                />
              ),
            },
          ]}
        />
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color='primary'>
            <h4 className={classes.cardTitleWhite}>Villeroy & Boch</h4>
            <p className={classes.cardCategoryWhite}>Site preview</p>
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
            <Hidden only={['lg', 'md', 'xl']}>
              <GridItem xs={12} sm={12} md={6}>
                <h5>
                  The sites are visible on Desktop mode inside an iframe. Since the iframe is not
                  working on Mobile and Tablets please visit the site on their original. Check the{' '}
                  <a
                    href='https://www.villeroy-boch.co.uk/shop/home'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
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
