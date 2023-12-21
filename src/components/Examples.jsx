import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id={"tab-content"}>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
            </div>
        )
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return (
        <>
            <section id={"examples"}>
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={selectedTopic === "components"}
                               onSelect={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"}
                               onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"}
                               onSelect={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"}
                               onSelect={() => handleSelect("state")}>State</TabButton>

                </menu>
                {tabContent}
            </section>
        </>
    )
}