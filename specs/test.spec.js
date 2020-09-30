import CharacterDetail from '../src/components/CharacterDetail.vue';
import CharacterListing from '../src/components/CharacterListing.vue';
import Search from '../src/pages/Search.vue';
import Home from '../src/pages/Home.vue';
import { mount } from '@vue/test-utils';
import 'regenerator-runtime/runtime';

test('character detail zeros', () => {
    const wrapper = mount(CharacterDetail, {
        propsData: {
            character: {
                comics: {
                    available: 0
                },
                name: "Test Name",
                series: {
                    available: 0
                },
                stories: {
                    available: 0
                },
                thumbnail: {
                    path: "http://test-path-for-image.com",
                    extension: "jpg"
                }
            }
        }
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("Appears in 0 comics, 0 series, and 0 stories.");
});

test('character detail numbers', () => {
    const wrapper = mount(CharacterDetail, {
        propsData: {
            character: {
                comics: {
                    available: 7
                },
                name: "Test Name",
                series: {
                    available: 234
                },
                stories: {
                    available: 543
                },
                thumbnail: {
                    path: "http://test-path-for-image.com",
                    extension: "jpg"
                }
            }
        }
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("Appears in 7 comics, 234 series, and 543 stories.");
});

test('search wrapper check', () => {
    const searchWrapper = mount(Search);

    expect(searchWrapper.html()).toMatchSnapshot();
});

test('character listing button check', async () => {
    const wrapper = mount(CharacterListing);
    await wrapper.setData({
        characters: [
            {
                comics: {
                    available: 0
                },
                name: "Test Name 1",
                series: {
                    available: 0
                },
                stories: {
                    available: 0
                },
                thumbnail: {
                    path: "http://test-path-for-image.com",
                    extension: "jpg"
                }
            },
            {
                comics: {
                    available: 7
                },
                name: "Test Name 2",
                series: {
                    available: 234
                },
                stories: {
                    available: 543
                },
                thumbnail: {
                    path: "http://test-path-for-image.com",
                    extension: "jpg"
                }
            }
        ]
    });

    const firstCharacterButton = wrapper.find('button');

    expect(wrapper.text()).not.toContain("Appears in 0 comics, 0 series, and 0 stories.");

    await firstCharacterButton.trigger('click');

    expect(wrapper.text()).toContain("Appears in 0 comics, 0 series, and 0 stories.");

    expect(wrapper.html()).toMatchSnapshot();
    wrapper.destroy();
});