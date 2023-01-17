import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './feature-style';

export default function ParallaxDeco() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            y={[-40, 40]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={845}
              height={1099}
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxDot
                )
              }
            >
              <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </Parallax>
          <Parallax
            y={[-50, 50]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={902}
              height={1042}
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxTriangle
                )
              }
            >
              <use xlinkHref="/images/decoration/triangle-deco.svg#triangle" />
            </svg>
          </Parallax>
          <Parallax
            y={[-50, 30]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={600}
              height={570}
              className={
                cx(
                  classes.parallaxVertical,
                  classes.parallaxCircle
                )
              }
            >
              <use xlinkHref="/images/decoration/circle-deco.svg#circle" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
