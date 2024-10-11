package com.piseth.java.school.phoneshopenight.mapper;

import com.piseth.java.school.phoneshopenight.dto.ModelDTO;
import com.piseth.java.school.phoneshopenight.entity.Brand;
import com.piseth.java.school.phoneshopenight.entity.Model;
import com.piseth.java.school.phoneshopenight.service.BrandService;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-11T10:51:42+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class ModelEntityMapperImpl implements ModelEntityMapper {

    @Autowired
    private BrandService brandService;

    @Override
    public Model toModel(ModelDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Model model = new Model();

        if ( dto.getBrandId() != null ) {
            model.setBrand( brandService.getById( dto.getBrandId().longValue() ) );
        }
        model.setName( dto.getName() );

        return model;
    }

    @Override
    public ModelDTO toModelDTO(Model model) {
        if ( model == null ) {
            return null;
        }

        ModelDTO modelDTO = new ModelDTO();

        Long id = modelBrandId( model );
        if ( id != null ) {
            modelDTO.setBrandId( id.intValue() );
        }
        modelDTO.setName( model.getName() );

        return modelDTO;
    }

    private Long modelBrandId(Model model) {
        if ( model == null ) {
            return null;
        }
        Brand brand = model.getBrand();
        if ( brand == null ) {
            return null;
        }
        Long id = brand.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
