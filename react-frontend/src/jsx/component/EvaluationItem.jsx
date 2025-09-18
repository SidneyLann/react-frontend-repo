import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Rate from 'jsx/component/Rate';

export default ({
  buyerUserName = '',
  sellerUserName = '',
  buyerEvaluateContent,
  buyerEvaluateImages = JSON.stringify([]),
  sellerResponseContent,
  cmmdStars
}) => (
  <div
    style={{ padding: 20, borderBottom: '1px solid rgba(187, 187, 187, 1)' }}
  >
    <Grid container spacing={24}>
      <Grid style={{ width: 180 }} item>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt=""
            style={{
              background: '#b7b7b7',
              width: 40,
              height: 40,
              marginRight: 5,
              borderRadius: '50%'
            }}
          />
          <div>{buyerUserName}</div>
        </div>
      </Grid>
      <Grid item xs>
        <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
          <Rate value={cmmdStars} disabled />
        </div>
        <div>{buyerEvaluateContent}</div>
        <div>
          {(JSON.parse(buyerEvaluateImages) || []).map(image => (
            <div
              style={{
                display: 'inline-block',
                marginRight: 10,
                marginBottom: 10
              }}
              key={image}
            >
              <img
                style={{ width: 250, height: 400, objectFit: 'cover' }}
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
    {sellerResponseContent && (
      <Grid container spacing={24}>
        <Grid style={{ width: 180 }} item>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt=""
              style={{
                background: '#b7b7b7',
                width: 40,
                height: 40,
                marginRight: 5,
                borderRadius: '50%'
              }}
            />
            <div>{sellerUserName}</div>
          </div>
        </Grid>
        <Grid item xs>
          <div style={{ background: 'rgb(245, 245, 245)', padding: 10 }}>
            <span style={{ color: 'rgb(178, 25, 27)' }}>{sellerUserName}</span>
            回复：
            {sellerResponseContent}
          </div>
        </Grid>
      </Grid>
    )}
  </div>
);
