import React from 'react';
import JsonData from './Leaderboard.json';
import './Leaderboard.css';

function Leaderboard() {

  const DisplayData = JsonData.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>
            {info.calmarRatio>0 &&  
                <img src="assets/calmarRatioProfit.png" alt="Chart Line" className="calmar-ratio-icon" /> 
            }
            {info.calmarRatio<0 &&  
                <img src="assets/calmarRatioLoss.png" alt="Chart Line" className="calmar-ratio-icon" /> }
            {info.calmarRatio}
        </td>
        <td>{info.overallProfit}</td>
        <td>{info.avgDailyProfit}</td>
        <td>{info.winPercent}</td>
        <td>{info.price? info.price : '-'}</td> 
      </tr>
    );
  });

  return (
    <div className='body pt-3 m-3' id="leaderboard">
        <h1 className='head text-center m-5'>LeaderBoards</h1>
        <div className='tab container p-3 pb-1'>
            <h2>Basic Backtest</h2>
            <table className="table ">
                <thead>
                    <tr>
                        <th>Rank <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Name <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Calmar Ratio <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Overall Profit <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Avg. Daily Profit <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Win %(Day) <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        <th>Price (Rs) <button className='ms-auto border-0 bg-white'>↓↑</button></th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody> 
            </table>
        </div>
    </div>
  );
}

export default Leaderboard;