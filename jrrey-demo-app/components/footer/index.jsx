import { h } from 'preact';
import IcecreamLove from 'images/icecream-love.svg';

export default function Footer() {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <footer>
          <p className="text-center">
            made with much
            <img alt={"logo"} src={IcecreamLove} width="50" height="50" />
          </p>
        </footer>
      </div>
    </div>
  );
}
