import "./MoreInfo.scss";

const MoreInfo = ({ continueWatching }) => {
  return (
    <div className="moreInfo">
      <div className="actions">
        <button>
          <i class="uil uil-play"></i>
        </button>
        <button>
          <i class="uil uil-plus"></i>
        </button>
        <button>
          <i class="uil uil-thumbs-up"></i>
        </button>
        <button>
          <i class="uil uil-angle-down"></i>
        </button>
      </div>
      <div className="infos">
        <h6>97% recommended</h6>
        <span>16+</span>
        <span>9 Episodes</span>
        <span>HD</span>
      </div>

      {!continueWatching && (
        <div className="tags">
          <p>Series</p>
          <span className="divider"></span>
          <p>Action</p>
          <span className="divider"></span>
          <p>Adventures</p>
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
