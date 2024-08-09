{
    'name':'Custom Barcode',
    'category':'Barcode',
    'summary':'Odoo Owl',
    'license':'LGPL-3',
    'version':'1.0',
    'depends': ['stock_barcode'],
    'data':[],
    'installable': True,
    'auto_install': False,
    'application': False,
    'assets':{
        'web.assets_backend': [
            'custom_stock_barcode/static/src/components/*/*.js',
        ],
    },
    
}
