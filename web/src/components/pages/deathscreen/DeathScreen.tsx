export const DeathScreen: React.FC = () => {
  return (
    <section>
      <i className="icon"></i>
      <span>YOU ARE</span>
      <h1>UNCONSCIOUS</h1>
      <div>
        <span>Press</span>
        <span>E</span>to Request Medical Services
      </div>
      <div className="timer">
        <div></div>
        <div></div>:<div></div>
        <div></div>
      </div>
    </section>
  );
};
