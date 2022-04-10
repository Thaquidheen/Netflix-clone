import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
const Featuredinfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className='featuredTitle'>
                    Reavanue
                </span>
                <div className="featuredMoneyContainer">
                    <span className='featuredMoney'>$35,45</span>
                    <span className='moneyRate'>-11.4  <ArrowDownward className='featuredIcon negative' /> </span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className='featuredMoney'>$75,45</span>
                    <span className='moneyRate'>-11.4  <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className='featuredTitle'>
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className='featuredMoney'>$3,45</span>
                    <span className='moneyRate'>+2.4  <ArrowUpward className='featuredIcon'/> </span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
        </div >
    );
}

export default Featuredinfo;
