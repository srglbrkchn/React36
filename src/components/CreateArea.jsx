import React, {useState} from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

function CreateArea(props) {
    const [note,
        setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    const [expanded, setExpanded] = useState(false);

    function handleClick() {
      setExpanded(true);
    }

    return (
        <div>
            <form className="create-note" onClick={handleClick}>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                    style={{display: expanded ? "block" : "none"}}
                    />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={expanded ? 3 : 1}/>
                <Zoom in={expanded}>
                    <Fab onClick={submitNote}>
                        <AddCircleOutline/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
