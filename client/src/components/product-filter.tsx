import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/language-context';

interface FilterOptions {
  materials: string[];
  thickness: string[];
  designs: string[];
  colors: string[];
}

interface ProductFilterProps {
  onFilterChange: (filters: any) => void;
  productType: 'sectional' | 'roller' | 'berry';
}

export function ProductFilter({ onFilterChange, productType }: ProductFilterProps) {
  const { t } = useLanguage();
  const [selectedFilters, setSelectedFilters] = useState({
    materials: [] as string[],
    thickness: [] as string[],
    designs: [] as string[],
    colors: [] as string[]
  });

  const filterOptions: FilterOptions = {
    materials: [
      'Стомана',
      'Алуминий', 
      'Дърво',
      'Стъкло',
      'Изолация'
    ],
    thickness: [
      '40мм',
      '42мм',
      '67мм',
      '80мм'
    ],
    designs: [
      'Гладка',
      'Касетна',
      'Релефна',
      'С прозорци',
      'Декоративна'
    ],
    colors: [
      'Бяло',
      'Кафяво',
      'Черно',
      'Сиво',
      'Бежово',
      'Зелено',
      'Синьо'
    ]
  };

  const handleFilterChange = (category: keyof FilterOptions, value: string, checked: boolean) => {
    const newFilters = { ...selectedFilters };
    
    if (checked) {
      newFilters[category] = [...newFilters[category], value];
    } else {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    }
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      materials: [],
      thickness: [],
      designs: [],
      colors: []
    };
    setSelectedFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <Card className="w-full md:w-80 h-fit">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">ФИЛТЪР</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-primary-blue hover:text-secondary-blue"
          >
            Изчисти
          </Button>
        </div>

        {/* Материал */}
        <div className="mb-6">
          <h4 className="font-medium mb-3 text-gray-900">Материал</h4>
          <div className="space-y-2">
            {filterOptions.materials.map((material) => (
              <div key={material} className="flex items-center space-x-2">
                <Checkbox
                  id={`material-${material}`}
                  checked={selectedFilters.materials.includes(material)}
                  onCheckedChange={(checked) => 
                    handleFilterChange('materials', material, checked as boolean)
                  }
                />
                <label 
                  htmlFor={`material-${material}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {material}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Дебелина */}
        <div className="mb-6">
          <h4 className="font-medium mb-3 text-gray-900">Дебелина на панела</h4>
          <div className="space-y-2">
            {filterOptions.thickness.map((thickness) => (
              <div key={thickness} className="flex items-center space-x-2">
                <Checkbox
                  id={`thickness-${thickness}`}
                  checked={selectedFilters.thickness.includes(thickness)}
                  onCheckedChange={(checked) => 
                    handleFilterChange('thickness', thickness, checked as boolean)
                  }
                />
                <label 
                  htmlFor={`thickness-${thickness}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {thickness}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Дизайн */}
        <div className="mb-6">
          <h4 className="font-medium mb-3 text-gray-900">Дизайн</h4>
          <div className="space-y-2">
            {filterOptions.designs.map((design) => (
              <div key={design} className="flex items-center space-x-2">
                <Checkbox
                  id={`design-${design}`}
                  checked={selectedFilters.designs.includes(design)}
                  onCheckedChange={(checked) => 
                    handleFilterChange('designs', design, checked as boolean)
                  }
                />
                <label 
                  htmlFor={`design-${design}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {design}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Цвят */}
        <div className="mb-4">
          <h4 className="font-medium mb-3 text-gray-900">Цвят</h4>
          <div className="grid grid-cols-2 gap-2">
            {filterOptions.colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedFilters.colors.includes(color)}
                  onCheckedChange={(checked) => 
                    handleFilterChange('colors', color, checked as boolean)
                  }
                />
                <label 
                  htmlFor={`color-${color}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}