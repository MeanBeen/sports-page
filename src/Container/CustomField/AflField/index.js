// import React, { useEffect, useState } from "react";
// import { Layout, Typography, Input, Image, Row, Col, Card } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { getScoresFetch } from "../../../Redux/Slice/ScoreSlice";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const { Search } = Input;

// const { Content } = Layout;
// const { Title, Text } = Typography;

// const CardItem = ({ id, username }) => {
//   const [{ isDragging }, drag] = useDrag({
//     // item: { type: "CARD", id },
//     type: "CARD",
//     item: { id, left: 0, top: 0 },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   return (
//     <Content
//       ref={drag}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         position: "absolute",
//         left: 0,
//         top: 0,
//       }}
//     >
//       <Card
//         key={id}
//         hoverable
//         style={{ width: 110, height: 190, marginBottom: 10 }}
//         cover={
//           <Image
//             preview={false}
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//             style={{ height: 150 }}
//           />
//         }
//       >
//         <Text>{username}</Text>
//       </Card>
//     </Content>
//   );
// };

// const AflField = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const apiScore = useSelector((state) => state.score.scores);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getScoresFetch());
//   }, []);

//   const filteredScores = apiScore.filter((data) =>
//     data.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const handleDrop = (item, monitor) => {
//     // Get the drag item's type and position
//     const { id, type } = item;

//     // Get the initial offset and client offset
//     const initialOffset = monitor.getInitialClientOffset();
//     const clientOffset = monitor.getClientOffset();

//     // Calculate the delta between the current and initial mouse positions
//     const delta = monitor.getDifferenceFromInitialOffset();

//     // If delta is not available, set it to 0
//     const deltaX = delta ? delta.x : 0;
//     const deltaY = delta ? delta.y : 0;

//     // Calculate the position of the dropped card
//     const left = Math.round(item.left + deltaX);
//     const top = Math.round(item.top + deltaY);

//     // Update the position of the dropped card
//     console.log("Dropped card with ID:", id, "at position:", left, top);
//     // You can perform additional actions based on the dropped card ID and its position
//   };

//   return (
//     <Content>
//       <Title>Customize The Players On The Field</Title>
//       <Search
//         placeholder="Enter Players Name"
//         enterButton="Search"
//         size="large"
//         style={{ marginBottom: 20 }}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Row justify={"space-between"}>
//         <Col>
//           <DndProvider backend={HTML5Backend}>
//             <Image
//               preview={false}
//               src="https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/132335499_3592680610768037_7484227381407024546_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfoNyxyvJgfAwzWTq_ymcBifOfCOH2ya6J858I4fbJriYTqGkT6CAk6ziGpZA9hDaVy2GBci2-cGSKUh5KjZLI&_nc_ohc=WYFreFAZ7DoQ7kNvgE_AtFF&_nc_ht=scontent.flhe25-1.fna&oh=00_AfDme3EG2rHjtelOskKHoSbBtK3AhPXRXlXTJU7pH7O_1w&oe=665D7193"
//               alt="footballfield"
//               width={800}
//               style={{ position: "relative" }}
//             />
//             <DropTarget onDrop={handleDrop} />
//           </DndProvider>
//         </Col>
//         <Col>
//           <DndProvider backend={HTML5Backend}>
//             {filteredScores.map((data) => (
//               <CardItem key={data.id} id={data.id} username={data.username} />
//             ))}
//           </DndProvider>
//         </Col>
//       </Row>
//     </Content>
//   );
// };

// const DropTarget = ({ onDrop }) => {
//   const [{ isOver }, drop] = useDrop({
//     accept: "CARD",
//     drop: (item, monitor) => {
//       const delta = monitor.getDifferenceFromInitialOffset();
//       const left = Math.round(item.left + delta.x);
//       const top = Math.round(item.top + delta.y);
//       onDrop({ ...item, left, top });
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div
//       ref={drop}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: isOver ? "rgba(0, 0, 0, 0.1)" : "transparent",
//         zIndex: 1,
//       }}
//     />
//   );
// };

// export default AflField;

// import React, { useEffect, useState } from "react";
// import { Layout, Typography, Input, Image, Row, Col, Card } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { getScoresFetch } from "../../../Redux/Slice/ScoreSlice";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const { Search } = Input;

// const { Content } = Layout;
// const { Title, Text } = Typography;

// const CardItem = ({ id, username }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: "CARD",
//     item: { id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   return (
//     <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
//       <Card
//         key={id}
//         hoverable
//         style={{ width: 110, height: 190, marginBottom: 10 }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//             style={{ height: 150 }}
//           />
//         }
//       >
//         <Text>{username}</Text>
//       </Card>
//     </div>
//   );
// };

// const AflField = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const apiScore = useSelector((state) => state.score.scores);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getScoresFetch());
//   }, []);

//   const filteredScores = apiScore.filter((data) =>
//     data.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDrop = (item) => {
//     // Handle the drop event here
//     console.log("Dropped card with ID:", item.id);
//     // You can perform additional actions based on the dropped card ID
//   };

//   return (
//     <Content>
//       <Title>Customize The Players On The Field</Title>
//       <Search
//         placeholder="Enter Players Name"
//         enterButton="Search"
//         size="large"
//         style={{ marginBottom: 20 }}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Row justify={"space-between"}>
//         <Col>
//           <DndProvider backend={HTML5Backend}>
//             <Image
//               preview={false}
//               src="https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/132335499_3592680610768037_7484227381407024546_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfoNyxyvJgfAwzWTq_ymcBifOfCOH2ya6J858I4fbJriYTqGkT6CAk6ziGpZA9hDaVy2GBci2-cGSKUh5KjZLI&_nc_ohc=WYFreFAZ7DoQ7kNvgE_AtFF&_nc_ht=scontent.flhe25-1.fna&oh=00_AfDme3EG2rHjtelOskKHoSbBtK3AhPXRXlXTJU7pH7O_1w&oe=665D7193"
//               alt="footballfield"
//               width={800}
//               style={{ position: "relative" }}
//             />
//             <DropTarget onDrop={handleDrop} />
//           </DndProvider>
//         </Col>
//         <Col>
//           <DndProvider backend={HTML5Backend}>
//             {filteredScores.map((data) => (
//               <CardItem key={data.id} id={data.id} username={data.username} />
//             ))}
//           </DndProvider>
//         </Col>
//       </Row>
//     </Content>
//   );
// };

// const DropTarget = ({ onDrop }) => {
//   const [{ isOver }, drop] = useDrop({
//     accept: "CARD",
//     drop: (item) => onDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   return (
//     <div
//       ref={drop}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: isOver ? "rgba(0, 0, 0, 0.1)" : "transparent",
//         zIndex: 1,
//       }}
//     />
//   );
// };

// export default AflField;

import React, { useEffect, useState } from "react";
import { Layout, Typography, Input, Card, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getScoresFetch } from "../../../Redux/Slice/ScoreSlice";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

const { Search } = Input;

const { Content } = Layout;
const { Title, Text } = Typography;

const CardItem = ({ id, username }) => {
  const {
    attributes: dragAttributes,
    listeners: dragListeners,
    setNodeRef: setDragNodeRef,
    transform,
  } = useDraggable({
    id,
  });

  const { isOver } = useDroppable({
    id,
  });

  return (
    <Content
      ref={setDragNodeRef}
      {...dragAttributes}
      {...dragListeners}
      style={{
        cursor: "grab",
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
        opacity: isOver ? 0.5 : 1,
      }}
    >
      <Card
        key={id}
        hoverable
        style={{ width: 100, height: 150 }}
        cover={
          <Image
            preview={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ height: 100 }}
          />
        }
      >
        <Text style={{ fontSize: 10, textAlign: "center" }}>{username}</Text>
      </Card>
    </Content>
  );
};

const AflField = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const apiScore = useSelector((state) => state.score.scores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScoresFetch());
  }, []);

  const filteredScores = apiScore.filter((data) =>
    data.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDrop = (event) => {
    console.log("Dropped card with ID:", event.active.id);
    // You can perform additional actions based on the dropped card ID and its position
  };

  return (
    <Content>
      <Title>Customize The Players On The Field</Title>
      <Search
        placeholder="Enter Players Name"
        enterButton="Search"
        size="large"
        style={{ marginBottom: 20 }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <DndContext onDragEnd={handleDrop}>
        <SortableContext
          items={filteredScores.map((data) => data.id)}
          strategy={sortableKeyboardCoordinates}
        >
          <Content
            style={{
              position: "relative",
              backgroundImage: `url('https://scontent.flhe25-1.fna.fbcdn.net/v/t1.6435-9/132335499_3592680610768037_7484227381407024546_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfoNyxyvJgfAwzWTq_ymcBifOfCOH2ya6J858I4fbJriYTqGkT6CAk6ziGpZA9hDaVy2GBci2-cGSKUh5KjZLI&_nc_ohc=WYFreFAZ7DoQ7kNvgE_AtFF&_nc_ht=scontent.flhe25-1.fna&oh=00_AfDme3EG2rHjtelOskKHoSbBtK3AhPXRXlXTJU7pH7O_1w&oe=665D7193')`,
              backgroundSize: "cover",
              width: 800,
              height: 850,
            }}
          >
            {filteredScores.map((data) => (
              <CardItem key={data.id} id={data.id} username={data.username} />
            ))}
          </Content>
        </SortableContext>
      </DndContext>
    </Content>
  );
};

export default AflField;
