# Healthletes

Team Sunrise: Caleb Jeyyken, Junna Cao, Sabrina Jahed, Nathan Lee, Gracie Di

## Published Site

Our published web app can be viewed here: 

## Mission

Healthletes aims to address the United Nations Sustainable Development Goal 3: Good Health and Wellbeing, with a specific focus on volleyball athletes who are underprivileged or recreational players. Volleyball, a popular sport enjoyed by many, often requires players to independently acquire knowledge about maintaining their physical health to optimize performance. This includes understanding injury prevention, mobility, and strengthening exercises. Currently, resources like physical therapy or rehabilitation clinics are available to address these needs, but they can be costly and inaccessible to all players. Additionally, while there is a wealth of information available online, much of it is not specific to volleyball and can be overwhelming, particularly for younger or novice athletes. Healthletes aims to bridge this knowledge gap by providing a free, tailored resource for all volleyball players, so that they can confidently step onto the court and perform their best. It is important to note that Healthletes is intended to be supplementary and should not be considered professional medical advice.

## Features

1. **Quiz:** Determines which areas of the body the player should focus on based on their background and current information.
2. **Interactive Diagram:** Educational anatomy diagram with clickable body parts linking to relevant resources.
3. **Resources:** Videos and written instructions for exercises that target key areas of the body for volleyball players. 
4. **Navigation Bar:** Located at the top for quick navigation through the quiz, diagram, and resources. 

## User Personas

![Persona 1: Ken](images/persona1.png)
![Persona 2: Natalie](images/persona2.png)

## Development

Built with:
- Javascript
- React
- HTML
- CSS
- Vercel

## Testing Protocol
| | **Feature 1: Quiz** | **Feature 2: Body Diagram** | **Feature 3: Resource** | **Feature 4: Navigation Bar** |
| --- | --- | --- | --- | --- |
| **Requirement Specification** | <p>Answer a series of targeted questions, including inquiries about playing frequency, areas of tenderness after practice, previous harm history, etc. The quiz result provides valuable insights into the body's needs and potential areas for improvement. <p>Upon completing the quiz, receive a personalized result accompanied by a detailed bar chart and explanation. Our comprehensive analysis highlights areas of body part that may require additional rehabilitation or exercise, based on user input.| <p>This diagram is designed to help uses easily access targeted rehabilitation and exercise resources for specific areas of the body. By clicking on a particular part of the diagram, such as the knee, shoulder, ankle, or back, user will be taken directly to a dedicated resource page filled with exercises, and rehabilitation tips tailored to that area. | <p>By clicking on specific labels such as knee, shoulder, ankle, or back, users will be directed to a wealth of relevant resources tailored to that body part. Each section provides video tutorials to help users understand and address needs. Additionally, there is an anatomy video to enhance the knowledge of how the body works and how best to support it. | This is designed to provide users with quick and easy access to all the essential features of our website. With a simple click, users can directed to main pages such as the Home Page, Interactive Body Diagram, Quiz, and Resource Page |
| **Testing Cases** | <p>Start answering questions, 6 questions.Questions are multiple choices. For each question, the user flow is similar. Select the choice(s) based on the question, it can be single choice or multiple choices. E.g Question: What position do you play? Question: What area(s) are the most tender after practice?(User can choose multiple answers) <p>After answering one question, click NEXT. <p>If the user wants to revise the answer for the previous question, click PREVIOUS. <p>After completing the last question, the user will see the result | <p>Look for and click the ankle part on the highlighthed area on the body diagram. | <p>Click the label ‘ankle’ on the resource bar <p>click to play the video | <p>Click the quiz button on the navbar to start a quiz. <p>Click the volleyball logo on the navbar to go to the home page. |
| **Expected Results** | <p>User should be able to select one or multiple answer(s). <p>Enter to the next question <p>Go back to the previous question, and change the answer. <p>Generate personalized exercise recommendations tailored to the user's specific needs and circumstances | <p>Direct to the relevant information resource about the ankle, context and videos will be included. | <p>Direct to the ankle resource page correctly. <p>Video can be played successfully |<p>Able to access to the quiz page and take the quiz. <p>Able to access the home page. |
| **Expected Deficiency** | <p>The radio button is unclickable; questions don’t show up; unable to select multiple answer. <p>Cannot go to the next page, or nothing shows up. <p>Cannot go back or the previous answer cannot be changed. <p>Unable to provide relevant exercise recommendations based on the user's input, or the pie chart is not accurate, or the quiz does not consider all relevant factors in determining exercise recommendations, leading to potentially ineffective or inappropriate suggestions. | <p>The page displayed is inaccratue or incomplete, e.g. show information about other parts/ nothing shows up. <P>If click the area near but out of the highlighted part, no interaction will be shown. | <p>Direct to other irrelevant pages; nothing shows up. <p>Video cannot be played | <p>Direct to other pages, e.g. resource page. <p>Cannot be directed to the home page, or nothing shows up. |


## Bugs
- Home page: Background image may take time to load.
- Quiz: The result may not be so accurate because we met limitations in domain knowledge and developed body part.


## Limitation
- <b>Limited Video Authority</b> Because we are not professionals, we cannot authenticate the information obtained on the Internet. Our platform only provides exercise suggestions and cannot be regarded as an authoritative expert.
- <b>Limited Domain Knowledge</b> We are not volleyball experts. So, while we are researching about the resources to put on the website, we may have limited perspectives and unintentionally ignore target users’ needs. 
- <b>Limited Resources for Testing</b> We may not be able to represent the full diversity of the target user population in terms of age, technical proficiency, or physical abilities. This can lead to a bias in testing results and may overlook issues that could arise for users outside the student demographic. We also have limited resources, such as time, budget, and access to professional testing tools, which can constrain the depth and scope of acceptance testing. This may result in incomplete coverage of use cases and potential issues.


## References
- The home backgraound and resource image are from Vecteezy.com
- The human anatomy muscle diagram is from Pinterest.com
- Videos are all from YouTube
- UN SDG#3 https://www.un.org/sustainabledevelopment/health/