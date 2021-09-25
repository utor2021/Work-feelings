
const { Status } = require('../models');

const statusdata = [
    {
        emoji: 'happy',
        diary: 'I feel happy today"',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'I feel sad today',
        user_id: 2
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 3
    },
    {
        emoji: 'sad',
        diary: 'not feeling so good',
        user_id: 3
    },
    {
        emoji: 'angry',
        diary: 'im pissed',
        user_id: 3
    },
    {
        emoji: 'happy',
        diary: 'im bless',
        user_id: 3
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 4
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 5
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 6
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 7
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 8
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 9
    },
    {
        emoji: 'sad',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 10
    }
];

const seedStatus = () => Status.bulkCreate(statusdata);

module.exports = seedStatus;
