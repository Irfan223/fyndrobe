import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import customStyle from './tab.module.css';
const AllProducts = React.lazy(() => import('./Items/AllProducts'));
const ItemTwo = React.lazy(() => import('./Items/Item2'));
const ItemThree = React.lazy(() => import('./Items/Item3'));
const ItemFour = React.lazy(() => import('./Items/Item4'));
const ItemFive = React.lazy(() => import('./Items/Item5'));
const ItemSix = React.lazy(() => import('./Items/Item6'));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
//   const [value, setValue] = React.useState(0);
  const {onChange, value} = props;
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange} variant="fullWidth" aria-label="simple tabs example">
          <Tab label="All Products" {...a11yProps(0)} className={customStyle.tab} />
          <Tab label="Item Two" {...a11yProps(1)} className={customStyle.tab}/>
          <Tab label="Item Three" {...a11yProps(2)} className={customStyle.tab}/>
          <Tab label="Item Four" {...a11yProps(3)} className={customStyle.tab} />
          <Tab label="Item Five" {...a11yProps(4)} className={customStyle.tab}/>
          <Tab label="Item Six" {...a11yProps(5)} className={customStyle.tab}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AllProducts />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ItemTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ItemThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <ItemFour />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <ItemFive />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <ItemSix />
      </TabPanel>
    </div>
  );
}
