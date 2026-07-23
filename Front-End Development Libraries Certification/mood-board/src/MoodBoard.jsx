import MoodBoardItem from "./MoodBoardItem";

const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="gray"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="A scenic Pathway of Caribbean"
        />
        <MoodBoardItem
          color="lightgreen"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Beautiful Shores of Gawadar Beach"
        />
        <MoodBoardItem
          color="lightblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Meadows of Cape Town"
        />
        <MoodBoardItem
          color="red"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Beautiful sunset with Ship passing by"
        />
        <MoodBoardItem
          color="black"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Cloudy view of Santorini by Sea"
        />
        <MoodBoardItem
          color="purple"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Pigeon sitting on mountain"
        />
      </div>
    </div>
  );
};


export default MoodBoard;
