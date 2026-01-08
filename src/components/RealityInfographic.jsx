import React from 'react';

export default function RealityInfographic() {
	// Brand colors
	const blue = '#003366';
	const brown = '#B5651D';
	const green = '#0A8842';

	// Icon SVGs for each pillar
	const icons = [
		// 1. Classroom density
		(
			<svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden><g><rect width="44" height="44" rx="12" fill="#EAF2FB"/><g><circle cx="13" cy="18" r="3" fill="#B5651D"/><circle cx="23" cy="18" r="3" fill="#B5651D"/><circle cx="33" cy="18" r="3" fill="#B5651D"/><rect x="10" y="23" width="6" height="8" rx="2" fill="#B5651D"/><rect x="20" y="23" width="6" height="8" rx="2" fill="#B5651D"/><rect x="30" y="23" width="6" height="8" rx="2" fill="#B5651D"/><rect x="7" y="33" width="30" height="2" rx="1" fill="#B5651D"/></g><rect x="6" y="6" width="32" height="32" rx="8" stroke="#B5651D" strokeWidth="1.5"/></g></svg>
		),
		// 2. Textbook ratio
		(
			<svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden><g><rect width="44" height="44" rx="12" fill="#F5F7FA"/><rect x="10" y="13" width="24" height="18" rx="3" fill="#003366"/><rect x="13" y="16" width="18" height="12" rx="2" fill="#fff"/><rect x="16" y="19" width="12" height="6" rx="1" fill="#B5651D"/><rect x="10" y="13" width="24" height="18" rx="3" stroke="#003366" strokeWidth="1.5"/></g></svg>
		),
		// 3. Digital access
		(
			<svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden><g><rect width="44" height="44" rx="12" fill="#EAF7F0"/><circle cx="22" cy="22" r="10" fill="#0A8842"/><rect x="14" y="20" width="16" height="4" rx="2" fill="#fff"/><rect x="20" y="14" width="4" height="16" rx="2" fill="#fff"/><rect x="6" y="6" width="32" height="32" rx="8" stroke="#0A8842" strokeWidth="1.5"/></g></svg>
		),
	];

	// Pillar data
	const pillars = [
		{
			number: 1,
			title: 'CLASSROOM DENSITY & TEACHER SUPPORT',
			value: '60+',
			valueLabel: 'STUDENTS / TEACHER',
			description: 'Prioritizing teacher support & microlearning for high classroom density.',
			color: brown,
			icon: icons[0],
			bg: '#FDF6F0',
			border: '#B5651D',
		},
		{
			number: 2,
			title: 'TEXTBOOK & DIGITAL RESOURCE ACCESS',
			value: '1:8',
			valueLabel: 'TEXTBOOK RATIO',
			description: 'Limited access to physical textbooks; digital content complements resources.',
			color: blue,
			icon: icons[1],
			bg: '#F5F7FA',
			border: '#003366',
		},
		{
			number: 3,
			title: 'RELIABLE DIGITAL CONNECTIVITY',
			value: '<15%',
			valueLabel: 'RELIABLE ACCESS',
			description: 'Limited connectivity & device access is a core constraint for digital learning.',
			color: green,
			icon: icons[2],
			bg: '#F0F8F4',
			border: '#0A8842',
		},
	];

	return (
		<section aria-labelledby="reality-title" className="py-8 lg:py-12">
			<div className="max-w-5xl mx-auto px-2 md:px-6">
				<div className="text-center mb-7">
					<h2 id="reality-title" className="text-2xl md:text-3xl font-heading font-bold text-slate-900 tracking-tight mb-1">
						THE REALITY IN OUR FOCUS SCHOOLS:
					</h2>
					<p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
						Key Programs Guided by Clear, Measurable, Action-Oriented Numbers.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{pillars.map((pillar, i) => (
						<div
							key={pillar.number}
							className="rounded-2xl shadow-md border-2 flex flex-col items-center px-4 py-6 h-full"
							style={{
								background: pillar.bg,
								borderColor: pillar.border,
								minHeight: 340,
								boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
							}}
						>
							<div className="flex items-center gap-2 mb-2">
								<span
									className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-lg shadow"
									style={{ background: pillar.color, border: `2px solid ${pillar.border}` }}
								>
									{pillar.number}
								</span>
								<span className="sr-only">pillar {pillar.number}</span>
							</div>
							<div className="mb-3">{pillar.icon}</div>
							<div className="uppercase text-xs font-bold tracking-wider mb-2 text-center" style={{ color: pillar.color, letterSpacing: 1.2 }}>{pillar.title}</div>
							<div className="flex flex-col items-center mb-2">
								<span className="text-3xl md:text-4xl font-extrabold" style={{ color: pillar.color }}>{pillar.value}</span>
								<span className="text-xs font-semibold text-slate-700 mt-1 tracking-wide">{pillar.valueLabel}</span>
							</div>
							<div className="text-xs text-slate-700 text-center font-medium" style={{ minHeight: 48 }}>{pillar.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
