module.exports = {
	config: {
		type: 'bar',
		data: {
			datasets: [{
				data: [1, 2, 3],
			}],
			labels: ['Long long label 1', 'Label2', 'Label3']
		},
		options: {
			indexAxis: 'y',
			legend: false,
			title: false,
			scales: {
				y: {
					position: 'right',
					ticks: {
						crossAlignment: 'far',
					},
				},
			}
		}
	},
	options: {
		spriteText: true,
		canvas: {
			height: 256,
			width: 512
		}
	}
};
