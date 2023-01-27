function widthSlider(slideSelector, textSelector) {
	const slides = document.querySelectorAll(slideSelector);
	const text = document.querySelectorAll(textSelector);




	slides.forEach((slide, i) => {

		slide.addEventListener('click', () => {

			slides.forEach((sl, i) => {
				sl.classList.remove('slider__item-active');
				text[i].classList.remove('slider__text-active');
			});
			slide.classList.add('slider__item-active');
			text[i].classList.add('slider__text-active');
		});
	});

}


widthSlider('.slider__item', '.slider__text');


