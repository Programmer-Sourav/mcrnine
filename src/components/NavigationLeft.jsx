import "../leftnavigation.css"

export default function NavigationLeft() {
    return (
      <div class="left-nav">
        <ul>
          <li>
            <i class="fa fa-home"></i> Home
          </li>
          <li>
            <i class="fa fa-compass"></i> Explore
          </li>
          <li>
            <i class="fa fa-clock-o"></i> Playlists
          </li>
          <li>
            <i class="fa fa-list"></i> Watch Later
          </li>
        </ul>
      </div>
    );
  }