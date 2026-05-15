## Transform Translate
Transform is a property. It has many types like translate, rotate, scale,skew


Translate is a specific type of property in Transform
( It is of further typess : TranslateX(), TranslateY() etc)

# Transition and Animation

## Transition (The "State-to-State" Change)

Transition is reactive. It means it needs state changes like hover , click etc. It can't run on its own. 

Trigger: Requires an external change (e.g., :hover, :focus, or a class change via JavaScript).

States: Only has two states (start and end).

Looping: Cannot loop; it runs once when triggered and reverses when the trigger is removed.

## Animation (The "Keyframe" Sequence)

Animations are more powerful and give you granular control over what happens between the start and the end. They use @keyframes to define specific points in the timeline.

Complexity: High. You can have as many intermediate steps as you want. Multiple states (0%, 25%, 50%, 100%, etc.).

Looping: Can loop infinitely (animation-iteration-count: infinite).

## New concepts learned
 line-height: 50px;

 Buttons of accepted , error and warning taken from Fontawesome free kit
 