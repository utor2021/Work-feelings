
const { Status } = require('../models');

const statusdata = [
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        user_id: 2
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
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
    },
    {
        emoji: 'angry',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 11
    },
];

const seedStatus = () => Status.bulkCreate(statusdata);

module.exports = seedStatus;
