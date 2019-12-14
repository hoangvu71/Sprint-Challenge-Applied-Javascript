// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicDOM = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => {
        const topics = res.data.topics;
        for (let i = 0; i < topics.length; i++){
            topicDOM.appendChild(Tabs(topics[i]));
        }

    }
    )
    .catch((err) => console.log("error!"));


function Tabs(data){
    const tabTopic = document.createElement('div');
    tabTopic.classList.add('tab');
    tabTopic.textContent = data;
    
    return tabTopic;
}