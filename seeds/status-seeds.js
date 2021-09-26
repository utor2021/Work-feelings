
const { Status } = require('../models');

const statusdata = [
    {
        emoji: 'sad',
        diary: 'Cras bibendum feugiat velit, id ornare purus. Cras sed dictum ante, ac ultrices tellus. ',
        user_id: 1
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 1
    },
    {
        emoji: 'neutral',
        diary: 'Sed lacinia urna turpis, vel hendrerit sapien vehicula in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Morbi diam tellus, tincidunt sed quam eu, tincidunt bibendum mi. Donec malesuada placerat nibh, a euismod velit dapibus eget. ',
        user_id: 1
    },
    {
        emoji: 'stressed',
        diary: 'Fusce euismod metus nec sem rutrum molestie. Proin sollicitudin ligula et orci vehicula lacinia sit amet id justo.',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 1
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 1
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 1
    },
    {
        emoji: 'neutral',
        diary: 'Maecenas placerat aliquam massa in tempus. Sed eget nisi ut sem porta malesuada. Nulla scelerisque pharetra ligula, sit amet lobortis enim dapibus tempus. ',
        user_id: 15
    },
    {
        emoji: 'angry',
        diary: 'Aliquam condimentum elementum orci sed commodo. Nam hendrerit augue quis elit volutpat efficitur. Suspendisse sagittis faucibus est nec rhoncus. Morbi sodales ut arcu vitae pharetra. Fusce pharetra non sapien eu scelerisque. Cras et tincidunt nisi. Duis tincidunt porttitor consequat.',
        user_id: 14
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 13
    },
    {
        emoji: 'tired',
        diary: 'Proin porttitor in mauris vel ullamcorper. Sed at est vehicula, dictum quam vitae, efficitur risus. Ut cursus ante eget nunc commodo, non tristique purus ornare.',
        user_id: 12
    },
    {
        emoji: 'angry',
        diary: 'Maecenas placerat aliquam massa in tempus. Sed eget nisi ut sem porta malesuada. Nulla scelerisque pharetra ligula, sit amet lobortis enim dapibus tempus. Morbi vitae metus posuere, viverra eros id, rhoncus purus.',
        user_id: 11
    },
    {
        emoji: 'happy',
        diary: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sed ex nulla.',
        user_id: 10
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 9
    },
    {
        emoji: 'angry',
        diary: 'Cras be happy anyway euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 8
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas dont cry because its over, smile because it happened.sed sed risus pretium quandumien eget mi.',
        user_id: 7
    },
    {
        emoji: 'neutral',
        diary: 'Sed at every day is a new daydictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 6
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor sit happiness is not a goal...it is a by-product of a life well-lived. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 5
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Happiness is a state of mind. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 4
    },
    {
        emoji: 'sad',
        diary: 'Elementum tempus egestas if you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.sed sed risus pretium quandumien eget mi.',
        user_id: 3
    },
    {
        emoji: 'happy',
        diary: 'Maecenas you cannot protect yourself from sadness without protecting yourself from happiness. dictum, mi vitae aliquet venenatis, dolor nibh dignissim lectus, sit amet commodo sem elit sed est. Proin sed sem luctus, pharetra neque nec, ullamcorper enim. ',
        user_id: 2
    },
    {
        emoji: 'stressed',
        diary: 'Sed lacinia urna turpis, vel hendrerit sapien vehicula in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ',
        user_id: 1
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 1
    },
    {
        emoji: 'tired',
        diary: 'Duis vehicula risus risus, ac sodales arcu venenatis eu. Aliquam ut tortor justo. Cras bibendum feugiat velit, id ornare purus. Cras sed dictum ante, ac ultrices tellus. ',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Fusce euismod metus nec sem rutrum molestie. Proin sollicitudin ligula et orci vehicula lacinia sit amet id justo. Phasellus volutpat tempus eros non auctor. Integer placerat commodo aliquet. ',
        user_id: 1
    },
    {
        emoji: 'happy',
        diary: 'Aliquam tincidunt justo ut varius scelerisque. Aenean laoreet neque vitae iaculis volutpat. Ut feugiat ipsum arcu, eget pulvinar magna dapibus quis. Ut non diam vitae enim accumsan tristique et in ligula. ',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 1
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 1
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 1
    },
    {
        emoji: 'tired',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 1
    },
    {
        emoji: 'neutral',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 1
    },
    {
        emoji: 'happy',
        diary: 'Cras et tincidunt nisi. Duis tincidunt porttitor consequat.',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Proin tempor id odio et tincidunt. Proin porttitor in mauris vel ullamcorper. Sed at est vehicula, dictum quam vitae, efficitur risus. Ut cursus ante eget nunc commodo, non tristique purus ornare.',
        user_id: 1
    },
    {
        emoji: 'stressed',
        diary: 'Sed no medicine cures what happiness cannot utperspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'Nullam porta nibh do not worry be happy orci, vitae suscipit tortor posuere eu. Sed at egestas orci. Sed condimentum quam vitae tellus feugiat, eget pretium nunc euismod. Quisque at pulvinar dui. ',
        user_id: 1
    },
    {
        emoji: 'angry',
        diary: 'Quisque id dictum elit, quis consectetur turpis. Sed quis elit vitae nibh facilisis commodo. Nullam tellus justo, interdum vel nunc ut, mattis vehicula velit.',
        user_id: 1
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor There is no path to happiness; happiness is the path.sit amet, consectetur adipiscing elit. Maecenas velit urna, pharetra eget libero at, porttitor luctus lectus. Pellentesque augue risus, porta quis tincidunt eget, fringilla ac dolor. Suspendisse elementum pulvinar diam ac finibus. ',
        user_id: 1
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 31
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 32
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 33
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 34
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 35
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 36
    },
    {
        emoji: 'sad',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 37
    },
    {
        emoji: 'happy',
        diary: 'I feel happy today"',
        user_id: 38
    },
    {
        emoji: 'sad',
        diary: 'I feel sad today',
        user_id: 39
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 40
    },
    {
        emoji: 'sad',
        diary: 'not feeling so good',
        user_id: 41
    },
    {
        emoji: 'angry',
        diary: 'im pissed',
        user_id: 42
    },
    {
        emoji: 'happy',
        diary: 'im bless',
        user_id: 43
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 44
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 45
    },
    {
        emoji: 'sad',
        diary: 'not feeling so good',
        user_id: 46
    },
    {
        emoji: 'angry',
        diary: 'im pissed',
        user_id: 47
    },
    {
        emoji: 'happy',
        diary: 'im bless',
        user_id: 48
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 49
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 50
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 16
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 17
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 18
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 19
    },
    {
        emoji: 'happy',
        diary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        user_id: 20
    },
    {
        emoji: 'sad',
        diary: 'not feeling so good',
        user_id: 21
    },
    {
        emoji: 'angry',
        diary: 'im pissed',
        user_id: 22
    },
    {
        emoji: 'happy',
        diary: 'im bless',
        user_id: 23
    },
    {
        emoji: 'sad',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 24
    },
    {
        emoji: 'angry',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 25
    },
    {
        emoji: 'stressed',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 26
    },
    {
        emoji: 'neutral',
        diary: 'Sed at dictum diam, id convallis lacus. Maecenas vel nibh ex. Pellentesque rhoncus arcu non accumsan sollicitudin. Sed in purus consectetur, rutrum velit at, imperdiet metus. Ut aliquam diam eget porttitor sodales. Mauris nec tempor enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in erat et augue tristique consequat viverra lacinia diam. Cras lobortis eget dui a ornare. Sed vitae nisi lectus. Pellentesque semper tellus vitae tellus tincidunt, vitae auctor urna blandit. Sed feugiat nibh eget nisl molestie, vitae vehicula justo tempor. Praesent rutrum tincidunt enim, eu auctor mauris congue a. Integer ornare vel lorem ut pharetra.',
        user_id: 27
    },
    {
        emoji: 'happy',
        diary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 28
    },
    {
        emoji: 'stressed',
        diary: 'Cras euismod dapibus varius. Sed commodo aliquet lobortis. Pellentesque ut efficitur velit. Pellentesque pharetra velit eget nibh consectetur facilisis. Sed nisl nibh, luctus a diam ut, rutrum bibendum odio. Phasellus condimentum pharetra suscipit. Sed facilisis, nisi in porta porttitor, sapien ligula placerat tortor, sed egestas mi mauris at turpis. Nam in orci rutrum, placerat odio sed, facilisis neque. Suspendisse maximus, lectus eget aliquet eleifend, velit odio malesuada nulla, at porttitor velit elit quis massa. Curabitur pharetra, eros non fermentum cursus, massa magna bibendum dolor, id tristique ipsum ligula id erat. In ligula ligula, aliquam a elementum viverra, iaculis et augue. Aenean ornare fringilla lacus non ullamcorper. Sed at ante elementum, tempor dui in, placerat lorem.',
        user_id: 29
    },
    {
        emoji: 'sad',
        diary: 'Elementum tempus egestas sed sed risus pretium quandumien eget mi.',
        user_id: 30
    }
];

const seedStatus = () => Status.bulkCreate(statusdata);

module.exports = seedStatus;
