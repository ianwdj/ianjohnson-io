(() => {
  const tabs = [...document.querySelectorAll('[data-question]')];
  const panel = document.getElementById('comparison');
  const cases = [...panel.querySelectorAll('[data-case]')];
  function showCase(index, focus = false) {
    cases.forEach((item, i) => { item.hidden = i !== index; });
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[index].id);
    if (focus) tabs[index].focus({preventScroll: true});
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showCase(index));
    tab.addEventListener('keydown', event => {
      const targets = {ArrowRight:(index+1)%tabs.length, ArrowLeft:(index+tabs.length-1)%tabs.length, Home:0, End:tabs.length-1};
      if (!(event.key in targets)) return;
      event.preventDefault(); showCase(targets[event.key], true);
    });
  });
  panel.addEventListener('click', event => {
    const button = event.target.closest('.expand-responses');
    if (!button) return;
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Collapse answers' : 'Expand answers';
    button.closest('[data-case]').querySelector('.actual-pair').classList.toggle('expanded', expanded);
  });
  document.querySelectorAll('.chart-choice').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.chart-choice').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.evidence-figure').forEach(figure => {figure.hidden = figure.id !== button.dataset.figure;});
  }));
  document.querySelectorAll('[data-example]').forEach(link => link.addEventListener('click', () => showCase(Number(link.dataset.example))));
})();

