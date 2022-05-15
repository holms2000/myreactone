export const Ref = (props) => (
  <div>
    <span>{props.text}</span>
    <sup>
      <a target="_blank" href={props.link}>
        {props.link.substring(8, 25) + "..."}
      </a>
    </sup>
  </div>
);
