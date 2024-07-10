import React from 'react';
import BreadcrumbTwo from '../../components/breadcrumb/breadcrumb-2';
import VideoModal from '../../components/common/modals/modal-video';
import useModal from '../../hooks/use-modal';
import { Footer, Header } from '../../layout';

function SingleButton({ title, btn_text, btn_class, icon, icon_left }) {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="col-lg-4 pb-70">
        <div className="element-tile">{title}</div>
        <p>Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit animal iracundia. Alteramo essent incorrupte.</p>
        <button onClick={() => setIsVideoOpen(true)} className={btn_class}> {icon_left && <i className={icon_left} aria-hidden="true"></i>} {btn_text} {icon && <i className={icon} aria-hidden="true"></i>}</button>
      </div>
      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'aXFSJTjVjw0'} />
      {/* video modal end */}
    </>
  )
}

const UiButtons = () => {

  return (
    <>
      <div className="main-page-wrapper">
        <Header />
        <BreadcrumbTwo title={'Button Style'} />
        {/* button style start */}
        <div className="element-section mb-150">
          <div className="container button-style">
            <div className="row">
              <SingleButton title="Solid round button" btn_class="solid-button-one" btn_text="round button" />
              <SingleButton title="round button icon right" btn_class="solid-button-one" btn_text="round button" icon="fa fa-angle-right icon-right" />
              <SingleButton title="round button icon left" btn_class="solid-button-one" btn_text="round button" icon="fa fa-angle-left icon-left" />
              <SingleButton title="Basic button" btn_class="theme-button-two" btn_text="basic button" />
              <SingleButton title="button icon right" btn_class="theme-button-two" btn_text="basic button" icon="fa fa-angle-right icon-right" />
              <SingleButton title="button icon left" btn_class="theme-button-two" btn_text="basic button" icon="fa fa-angle-left icon-left" />
              <SingleButton title="Line button one" btn_class="line-button-one" btn_text="line button" />
              <SingleButton title="Line button Two" btn_class="line-button-two" btn_text="line button" />
              <SingleButton title="Shadow Button" btn_class="white-shdw-button" btn_text="white button" />
              <SingleButton title="Shadow Button with icon" btn_class="white-shdw-button" btn_text="white button" icon="icon flaticon-next" />
              <SingleButton title="Video button one" btn_class="fancybox video-button-one" btn_text="white button" icon_left="flaticon-play-button icon-left" />
              <SingleButton title="Video button one" btn_class="fancybox video-button-one"
                btn_text="Video icon right." icon_left="flaticon-play-button icon-right" />
            </div>
          </div>
        </div>
        {/* button style end */}

        {/* additional button start */}
        <div className="element-section mb-150">
          <div className="container">
            <div className="element-tile-two">Additional Buttons</div>
            <div>
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-secondary">Secondary</button>
              <button type="button" className="btn btn-success">Success</button>
              <button type="button" className="btn btn-danger">Danger</button>
              <button type="button" className="btn btn-warning">Warning</button>
              <button type="button" className="btn btn-info">Info</button>
              <button type="button" className="btn btn-light">Light</button>
              <button type="button" className="btn btn-dark">Dark</button>
              <button type="button" className="btn btn-link">Link</button>
            </div>
          </div>
        </div>
        {/* additional button end */}

        {/* sizes buttons start */}
        <div className="element-section mb-150">
          <div className="container">
            <div className="element-tile-two">Sizes</div>
            <p className="pb-70">Fancy larger or smaller buttons? Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for additional sizes.</p>

            <div>
              <button type="button" className="btn btn-primary btn-lg">Large button</button>
              <button type="button" className="btn btn-secondary btn-lg">Large button</button>
              <button type="button" className="btn btn-primary btn-sm">Small button</button>
              <button type="button" className="btn btn-secondary btn-sm">Small button</button>
            </div>

            <p className="pb-70 pt-50">Create block level buttons—those that span the full width of a parent—by adding <code className="highlighter-rouge">.btn-block</code>.</p>

            <div>
              <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
              <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
            </div>
          </div>
        </div>
        {/* sizes buttons end */}
        <Footer top_border={true} />
      </div>
    </>
  );
};

export default UiButtons;