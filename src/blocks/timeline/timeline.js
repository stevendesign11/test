import $ from 'jquery';
import Quill from 'quill';

$(() => {
  const steps = [
    {
      template: '<div class="timeline-modal__form-row"> <div class="timeline-modal__action timeline-modal__action--send"> <div class="timeline-modal__action-icon"><svg class="icon icon--envelope-circle"> <use xlink:href="img/sprite.svg#envelope-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Send Email</h3> <div class="timeline-modal__action-text">Set up emails to automatically send to your clients</div> </div> </div> <div class="timeline-modal__action timeline-modal__action--create"> <div class="timeline-modal__action-icon"><svg class="icon icon--todo-circle"> <use xlink:href="img/sprite.svg#todo-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Create a Todo</h3> <div class="timeline-modal__action-text">Create ToDo so nothing is missed throughout the Onboarding Process</div> </div> </div> </div>'
    },
    {
      template: '<div class="timeline-modal__form-row"> <div class="timeline-modal__action timeline-modal__action--send timeline-modal__action--selected"> <div class="timeline-modal__action-icon"><svg class="icon icon--envelope-circle"> <use xlink:href="img/sprite.svg#envelope-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Send Email</h3> <div class="timeline-modal__action-text">Set up emails to automatically send to your clients</div> </div> </div> <div class="timeline-modal__action timeline-modal__action--create"> <div class="timeline-modal__action-icon"><svg class="icon icon--todo-circle"> <use xlink:href="img/sprite.svg#todo-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Create a Todo</h3> <div class="timeline-modal__action-text">Create ToDo so nothing is missed throughout the Onboarding Process</div> </div> </div> </div> <div class="timeline-modal__form-row"> <div class="form-group"><label class="form-group__label">Send Email From</label><select class="select" name="from"> <option disabled selected>Select</option ><option>Another option</option> </select></div> <div class="form-group"><label class="form-group__label">With This Message</label><select class="select form-group__control js-select-message" name="message"><option selected disabled>Select Template</option> <option>Template Name</option> </select></div> </div> <div class="timeline-modal__create"><button class="timeline-modal__btn-create" type="button"><svg class="icon icon--plus"> <use xlink:href="img/sprite.svg#plus"></use> </svg>Create Template</button></div> '
    },
    {
      template: '<div class="timeline-modal__form-row"> <div class="timeline-modal__action timeline-modal__action--send timeline-modal__action--selected"> <div class="timeline-modal__action-icon"><svg class="icon icon--envelope-circle"> <use xlink:href="img/sprite.svg#envelope-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Send Email</h3> <div class="timeline-modal__action-text">Set up emails to automatically send to your clients</div> </div> </div> <div class="timeline-modal__action timeline-modal__action--create"> <div class="timeline-modal__action-icon"><svg class="icon icon--todo-circle"> <use xlink:href="img/sprite.svg#todo-circle"></use> </svg></div> <div class="timeline-modal__action-content"> <h3 class="timeline-modal__action-title">Create a Todo</h3> <div class="timeline-modal__action-text">Create ToDo so nothing is missed throughout the Onboarding Process</div> </div> </div> </div> <div class="timeline-modal__form-row"> <div class="form-group"><label class="form-group__label">Send Email From</label><select class="select" name="from"> <option disabled selected>Select</option > <option>Another option</option> </select></div> <div class="form-group"><label class="form-group__label">With This Message</label><select class="select form-group__control" name="message"> <option>Template Name</option></select></div> </div> <div class="timeline-modal__form-row"> <div class="timeline-modal__editor"> <div class="timeline-modal__editor-header"> <h2 class="timeline-modal__title">Touchpoint Card Title</h2> <div class="timeline-modal__uploaded-file"><svg class="icon icon--clip"> <use xlink:href="img/sprite.svg#clip"></use> </svg>Document Name.pdf</div><button class="timeline-modal__edit" type="button"><svg class="icon icon--edit"> <use xlink:href="img/sprite.svg#edit"></use> </svg>Edit Template</button> </div> <div class="timeline-modal__editor-content"> <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis au ten irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteu occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum excepteur sint occa ecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> </div> </div>'
    },
    {
      template: '<div class="timeline-modal__form-row"> <div class="form-group"><input class="input" type="text" /><label class="form-group__placeholder">Subject</label></div> </div> <div class="timeline-modal__form-row"> <div class="form-group"><label class="form-group__label">With This Message</label><input class="input" readonly value="Template Name"></div> </div> <div class="timeline-modal__form-row"> <div class="editor"><label class="editor__btn-upload"><svg class="icon icon--upload"> <use xlink:href="img/sprite.svg#upload"></use> </svg><input type="file">Upload Attachment</label> <div id="editor"></div> </div> </div> <div class="timeline-modal__form-footer"><button class="link js-back" type="button"><svg class="icon icon--arrow-left"> <use xlink:href="img/sprite.svg#arrow-left"></use> </svg>Back</button><button class="link" type="button">Save as new template</button><button class="btn btn--main">update</button></div> '
    },
    {
      template: '<div class="timeline-modal__form-row"> <div class="form-group"><label class="form-group__label">Subject</label><select class="select"><option selected disabled>Select</option><option>Another option</option></select></div> </div> <div class="timeline-modal__form-row"> <div class="form-group"><label class="form-group__label">With This Title</label><input class="input"></div> </div> <div class="timeline-modal__form-row"> <div class="editor"> <div id="editor"></div> </div> </div> <div class="timeline-modal__form-footer"><button class="link js-back" type="button"><svg class="icon icon--arrow-left"> <use xlink:href="img/sprite.svg#arrow-left"></use> </svg>Back</button><button class="btn btn--main">Save</button></div> '
    }
  ];

  $('.timeline').on('click', '.toggle__input', (e) => {
    const timelineItem = $(e.target).closest('.timeline__item');
    timelineItem.toggleClass('timeline__item--active');
  });

  const timelineModal = $('.timeline-modal');
  const timelineModalContent = $('.timeline-modal__js', timelineModal);

  const renderSteps = (number) => {
    timelineModalContent.html('');
    timelineModalContent.append(steps[number].template);
  };

  timelineModal.on('click', '.timeline-modal__action--send', () => {
    renderSteps(1);
    $('select.select').niceSelect();
  });

  timelineModal.on('click', '.timeline-modal__action--create', () => {
    renderSteps(4);
    new Quill('#editor', {
      theme: 'snow'
    });
    $('select.select').niceSelect();
  });

  timelineModal.on('click', '.timeline-modal__btn-create', () => {
    renderSteps(3);
    new Quill('#editor', {
      theme: 'snow'
    });
    $('select.select').niceSelect();
  });

  timelineModal.on('click', '.timeline-modal__edit', () => {
    renderSteps(3);
    new Quill('#editor', {
      theme: 'snow'
    });
    $('select.select').niceSelect();
  });

  timelineModal.on('click', '.js-back', () => {
    renderSteps(0);
    $('select.select').niceSelect();
  });

  timelineModal.on('change', '.js-select-message', () => {
    renderSteps(2);
    $('select.select').niceSelect();
  });

  function createFileElement(name) {
    const el = $('<div class="editor__uploaded-file"><svg class="icon icon--clip"> <use xlink:href="img/sprite.svg#clip"></use> </svg>' + name + '<button class="editor__remove-file" type="button"><svg class="icon icon--cross"> <use xlink:href="img/sprite.svg#cross"></use> </svg></button></div>');
    const btnRemove = $('.editor__remove-file', el);
    btnRemove.on('click', () => {
      el.remove();
    });
    return el;
  }

  timelineModal.on('change', '.editor__btn-upload', (e) => {
    const editor = $('.editor');
    $('.editor__uploaded-file', editor).remove();

    const file = e.target.files;
    let fileName = '';
    if (file && file.length > 1)
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    else
      fileName = e.target.value.split('\'').pop();

    if (fileName) {
      editor.append(createFileElement(fileName));
    }

    return false;
  });

  $('.modal__btn-close').on('click', () => {
    renderSteps(0);
  });
});
