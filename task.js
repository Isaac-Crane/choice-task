var image_presentation = {
	type: 'html-image-button-response',
	stimulus: 'Make a choice',
	images: function(){
		if (jsPsych.timelineVariable('randomVariable') == 0){
			return [jsPsych.timelineVariable('Face'), jsPsych.timelineVariable('Scene')]
		}
		else{
			return [jsPsych.timelineVariable('Scene'), jsPsych.timelineVariable('Face')]
		}
	},
	choices: ['hello', 'goodbye'],
	data:{task: 'instructions1'},
}

var image_presentation_setup = {
	timeline: [image_presentation],
	timeline_variables: stimuli()
}



timeline_order = [image_presentation_setup]

jsPsych.init({
	timeline: timeline_order,
	on_finish: function(){
		jsPsych.data.displayData('csv')
	}
});