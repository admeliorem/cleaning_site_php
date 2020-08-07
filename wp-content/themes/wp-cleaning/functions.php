<?php
function strategy_assets(){

wp_enqueue_style('normilize', get_template_directory_uri() . '/assets/css/libs.min.css', $deps = array(), filemtime( get_template_directory() . $src ));
wp_enqueue_style('my_style', get_template_directory_uri() . '/assets/css/style.min.css', $deps = array(), filemtime( get_template_directory() . $src ));

}

add_action('wp_enqueue_style', 'strategy_assets');