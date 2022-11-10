import { useRef } from 'react';
import styled from 'styled-components';

import Editor from '../components/Editor';

import ButtonArrow from '../components/buttons/ButtonArrow';
import heroWallpaper from '../assets/images/welcome-wallpaper.jpg';

import { buttonColor } from '../constants/styles';

const HeroSectionStyle = styled.section`
  /* ====== SECTION SETTINGS ====== */
    /* ~  (Section Syle)  ~ */
      --section-bg-s1-margin: 0 auto;
      --section-bg-s1-min_height: 100vh;
      --section-bg-s1-max_height: auto;
      --section-bg-s1-padding: 20px;
      --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
      --section-bg-s1-bg_image: url(${heroWallpaper});
      --section-bg-s1-bg_attachment: fixed;
      --section-bg-s1-bg_position: center;
      --section-bg-s1-bg_repeat: no-repeat;
      --section-bg-s1-bg_blend_mode: darken;
      --section-bg-s1-bg_size: cover;
      --section-bg-s1-box_shadow: none;
    /* ----------~(end)~---------- */
    
    /* ~  (Section Title)  ~ */
      h1 {
        --section-text-margin: 0 auto;
        --section-text-padding: 0px;
        --section-text-display: block;
        --section-text-color: #fff;
        --section-font_family: inherit;
        --section-font_size: 64px;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_align: center;
        --section-text_decoration: none;
        --section-text_shadow: 1px 1px 1px #8B4513;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */

    /* ~  (Section SubTitle)  ~ */
      h2 {
        --section-text-margin: 0 auto;
        --section-text-padding: 0 20px 20px 20px;
        --section-text-display: block;
        --section-text-color: #fff;
        --section-font_family: inherit;
        --section-font_size: 46px;
        --section-font_weight: normal;
        --section-font_style: oblique;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #666;
        --section-text-line_height: 1.3;
      }
    /* ----------~(end)~---------- */

    /* ~  (Section H3 Style)  ~ */
      h3 {
        --section-text-margin: 0 auto;
        --section-text-padding: none;
        --section-text-display: block;
        --section-text-color: #000;
        --section-font_family: inherit;
        --section-font_size: 20px;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #d2d2d2;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */
    
    /* ~  (Section Paragraph Style)  ~ */
      p {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px;
        --section-text-display: block;
        --section-text-color: #000;
        --section-font_family: inherit;
        --section-font_size: 16px;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: none;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */
    
    /* ~  (Section Anchor Style)  ~ */
      a {
        --section-text-margin: 0 auto;
        --section-text-padding: none;
        --section-text-display: inline-block;
        --section-text-color: #5C5D5D;
        --section-font_family: inherit;
        --section-font_size: inherit;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #d2d2d2;
        --section-text-line_height: 1.5;
        --section-text_decoration: underline;

        &:hover {
          --section-text-hover-color: #990000;
        }
      }
    /* ----------~(end)~---------- */

    .oblique-text {
      font-style: italic;
      text-decoration: underline dotted #fff;
    }

    .buttons-position {
      padding: 10px;
    }

  /* For more settings go to ["styles/index.scss"] */
  /* =================|END|================= */
`;

const LatestFoodSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 40px 20px;
  --section-bg-s1-bg_color: #f0f0f0;
  --section-bg-s1-bg_image: none;
  --section-bg-s1-bg_attachment: none;
  --section-bg-s1-bg_position: relative;
  --section-bg-s1-bg_repeat: none;
  --section-bg-s1-bg_blend_mode: none;
  --section-bg-s1-bg_size: border-box;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: ${buttonColor};
      --section-font_family: inherit;
      --section-font_size: 36px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 40px 20px;
      --section-text-display: block;
      --section-text-color: #666;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }

    .post-item-pos {
      margin: 10px;
    }

    .buttons-position {
      margin: 40px;
    }
    /* For more settings go to ["styles/index.scss"] */
`;

const MainPage = () => {
  const heroRef = useRef(0);

  return (
    <>
      <HeroSectionStyle className="grid-list-2lrg-2mid-2sml section">
        <header className="grid-wrapper-column grid-col-center">
          <h1>
            Ahoy! Are you looking to create some pixel art?
          </h1>
        </header>
        <ButtonArrow className="grid-col-all center" onClick={heroRef} />
      </HeroSectionStyle>
      <LatestFoodSectionStyle className="grid section" ref={heroRef} >
        <header className="grid-wrapper-column">
          <h1>Pixel Editor</h1>
          <h2>Try out the pixel drawing tool bellow</h2>
        </header>
        <div className="grid-wrapper-column">
          <Editor />
        </div>
      </LatestFoodSectionStyle>
    </>
  );
};

export default MainPage;