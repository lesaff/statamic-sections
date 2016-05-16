<?php

namespace Statamic\Addons\Sections;

use Statamic\Extend\Listener;

class SectionsListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = [
        'cp.add_to_head' => 'sectionsCSS'
    ];

    /**
     * Initialize Sections CSS
     * @return string
     */
    public function sectionsCSS()
    {
        $addon_css = $this->css->url('sections.css');
        $html = '<link rel="stylesheet" href="' . $addon_css . '">';
        return $html;
    } 
}
