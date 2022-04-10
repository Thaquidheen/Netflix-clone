import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart';

import WidgetLg from '../../components/widgetLg/WidgetLg'

import WidgetSm from '../../components/widgetSm/WidgetSm';
import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const Home = () => {
  const MONTH = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []);
  const [userStats, setUserstats] = useState([])
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("users/stats", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjExOGI3ZmIyYTRhMzVjNWJjYjBhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTMyMDgwOSwiZXhwIjoxNjQ5NzUyODA5fQ.4yux9IJNCTgWVOcTfvkVbfTIcRUaje6L4wodpf9MGws" }, });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id
        })
        statsList.map((item) => setUserstats((prev) => [...prev, { name: MONTH[item._id - 1], "New User": item.total }]))
      } catch (err) {
        console.log(err);
      }
    };
    getStats()
  }, [MONTH])
  console.log(userStats);
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" dataKey="New User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
