import data from './data.json';

function App() {

    const list = [];

    for (let i = 0; i < data.recipients.length; i++) {
  
        for (let j = i+1; j < data.recipients.length; j++) {

            let name1 = data.recipients[i].name;
            let name2 = data.recipients[j].name;
            // find intersection in tags
            let commontags = data.recipients[i].tags.filter(value => data.recipients[j].tags.includes(value));

            if (commontags.length > 0) {
                list.push(name1 + ", " + name2 + " - [" + commontags.toString() + "] | ")
            }

        }
    }

    if (list) console.log(list)

    return (
        <>
        <div>{list}</div>
        </>
    );
  }
  
  export default App;