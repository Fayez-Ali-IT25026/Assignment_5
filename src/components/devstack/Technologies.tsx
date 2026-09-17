

const Technologies = ({devStack}) => {
    console.log(devStack, 'Tecnoloies')
    return (
        <div>
            {devStack.map((item) => (
        <div key={item.id}>
          <img src={item.icon} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>Rating: {item.rating}</p>
          <p>Difficulty: {item.difficulty}</p>
          <span>{item.badge}</span>
        </div>
      ))}
        </div>
    );
};

export default Technologies;