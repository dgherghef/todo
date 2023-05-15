import { Typography } from '@mui/material';
import '../App.css';

const DONE_STYLE = {
  textDecoration: 'line-through',
  textDecorationColor: 'red',
  margin: '0px',
  padding: '0px',
  // fontFamily: 'Indie Flower',
  // fontSize: '20px',
};

function DoneList(props) {
  const { deletedItems } = props;
  return (
    <div>
      <div id='paper2'>
        <div id='pattern'>
          <div id='content'>
            <Typography id='title-lists'>Done</Typography>
            <div style={{ margin: '0px', padding: '0px' }}>
              {deletedItems.map((currentItem, index) =>
                currentItem !== 0 ? (
                  <p key={index} style={DONE_STYLE}>
                    {currentItem}
                  </p>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoneList;
